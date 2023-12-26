import { prisma } from '@/lib';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

import { stripeApi } from '@/lib/stripe';

const { stripe } = stripeApi();

// export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = headers().get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SECRET!;

  if (!signature || !secret) {
    return NextResponse.json(
      { message: 'Missing the stripe signature' },
      { status: 404 }
    );
  }

  try {
    const event: Stripe.Event = stripe.webhooks.constructEvent(
      body,
      signature,
      secret
    );

    switch (event.type) {
      case 'charge.succeeded':
        // eslint-disable-next-line no-case-declarations
        const charge = event.data.object as Stripe.Charge;

        if (typeof charge.payment_intent === 'string') {
          await prisma.order.update({
            where: { paymentIntentID: charge.payment_intent },
            data: { status: 'completed' },
          });
        }
        return NextResponse.json(
          { message: 'Transaction complete' },
          { status: 200 }
        );
      default:
        return NextResponse.json(
          { message: 'Stripe events', data: event },
          { status: 200 }
        );
    }
  } catch (err) {
    return NextResponse.json(
      { message: 'Webhook error', error: err },
      { status: 400 }
    );
  }
}
