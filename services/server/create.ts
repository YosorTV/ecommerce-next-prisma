import { userResponseAdapter } from '@/adapters';
import { prisma } from '@/lib';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

type UserData = {
  data: {
    id: string;
    name: string;
    email: string;
    password?: string;
  };
};

export const createUserData = async ({ data }: UserData) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-08-16',
  });

  try {
    const customer = await stripe.customers.create({
      name: data.name,
      email: data.email,
    });

    const result = await prisma.account.create({
      data: {
        provider: 'supabase',
        type: 'creadentials',
        id: customer.id,
        providerAccountId: customer.id,
        user: {
          create: {
            ...data,
            id: customer.id,
            stripeCustomerId: customer.id,
          },
        },
      },
    });

    return result;
  } catch (err) {
    console.error('err: ', err);
    const { status } = userResponseAdapter().error;
    return NextResponse.json({ message: err }, { status });
  }
};
