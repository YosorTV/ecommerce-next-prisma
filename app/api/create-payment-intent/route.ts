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
    currency: 'usd',
    status: 'pending',
    products: {
      create: items,
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

        const existedOrder = await prisma.order.findUnique({
          where: { paymentIntentId: updatedIntent.id },
          include: { products: true },
        });

        if (existedOrder) {
          await prisma.order.update({
            where: { paymentIntentId: updatedIntent.id },
            data: {
              amount: totalPrice,
              products: {
                deleteMany: {},
                create: items,
              },
            },
          });

          return NextResponse.json(
            { message: 'Success', data: updatedIntent },
            { status: 200 }
          );
        }
      }
    } catch (e) {
      return NextResponse.json(
        { message: 'Invalid payment intent' },
        { status: 400 }
      );
    }
  } else {
    // Create a new order
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: totalPrice,
        automatic_payment_methods: { enabled: true },
      });

      await prisma.product.deleteMany();

      const newOrder = await prisma.order.create({
        data: {
          ...orderData,
          paymentIntentId: paymentIntent.id,
        },
      });

      if (newOrder) {
        return NextResponse.json(
          { message: 'Success', data: paymentIntent },
          { status: 200 }
        );
      }
    } catch (e) {
      return NextResponse.json({ message: 'Error' }, { status: 400 });
    }
  }
}
