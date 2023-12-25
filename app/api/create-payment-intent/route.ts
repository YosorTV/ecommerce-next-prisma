import { authOptions, prisma } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { formatTotalAmount } from '@/helpers/formatters';
import { stripeApi } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const { stripe } = stripeApi();

  if (!session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { paymentIntentId, items } = await request.json();

  const { totalPrice } = formatTotalAmount(items);

  const orderData = {
    user: { connect: { id: session.user.id } },
    amount: totalPrice,
    paymentIntentID: paymentIntentId,
    currency: 'usd',
    status: 'pending',
    products: {
      create: items.map((item: any) => ({
        name: item.name,
        description: item.description || null,
        unit_amount: item.unit_amount,
        image: item.image,
        quantity: item.quantity,
      })),
    },
  };

  if (paymentIntentId) {
    try {
      const currentIntent = await stripe.paymentIntents.retrieve(
        paymentIntentId
      );

      if (currentIntent) {
        const updatedIntent = await stripe.paymentIntents.update(
          paymentIntentId,
          { amount: totalPrice }
        );

        const existedOrder = await Promise.all([
          prisma.order.findFirst({
            where: { paymentIntentID: updatedIntent.id },
            include: { products: true },
          }),

          prisma.order.update({
            where: { paymentIntentID: updatedIntent.id },
            data: {
              amount: totalPrice,
              products: {
                deleteMany: {},
                create: items.map((item: any) => ({
                  name: item.name,
                  description: item.description || null,
                  unit_amount: item.unit_amount,
                  image: item.image,
                  quantity: item.quantity,
                })),
              },
            },
          }),
        ]);

        if (!existedOrder) {
          throw Error('Invalid payment intent');
        }

        return NextResponse.json(
          { message: 'Success', data: updatedIntent },
          { status: 200 }
        );
      }
    } catch (e) {
      return NextResponse.json(
        { message: e.message, data: null },
        { status: 400 }
      );
    }
  }

  // await prisma.product.deleteMany();

  const paymentIntent = await stripe.paymentIntents.create({
    currency: 'usd',
    amount: totalPrice,
    automatic_payment_methods: { enabled: true },
  });

  orderData.paymentIntentID = paymentIntent.id;

  try {
    await prisma.order.create({
      data: orderData,
    });

    return NextResponse.json(
      { message: 'Order created', data: paymentIntent },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: 'Error creating order', data: null },
      { status: 400 }
    );
  }
}
