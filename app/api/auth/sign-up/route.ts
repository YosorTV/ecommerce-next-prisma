import {
  byEmailAdapter,
  createdUserAdapter,
  userResponseAdapter,
} from '@/adapters';
import { supabase } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { stripeApi } from '@/lib/stripe';

const { stripe } = stripeApi();

export async function POST(request: NextRequest) {
  const { data } = await createdUserAdapter({ data: await request.json() });

  try {
    const { data: response } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    const existingUser = await prisma.user.findUnique(byEmailAdapter({ data }));

    if (existingUser) {
      const { message, status } = userResponseAdapter().existed;
      return NextResponse.json({ message, status }, { status });
    }

    if (response.user.id) {
      const customer = await stripe.customers.create({
        name: data.name,
        email: data.email,
      });

      const result = await prisma.account.create({
        data: {
          provider: 'email',
          type: 'creadentials',
          id: response.user.id,
          providerAccountId: response.user.id,
          user: {
            create: {
              password: data.password,
              email: data.email,
              name: data.name,
              id: response.user.id,
              stripeCustomerId: customer.id,
            },
          },
        },
      });

      if (result) {
        const { message, status } = userResponseAdapter().success;
        return NextResponse.json({ message, status }, { status });
      }

      const { message, status } = userResponseAdapter().error;
      return NextResponse.json({ message, status }, { status });
    }
  } catch (err) {
    return NextResponse.json(
      { message: 'Intenal Server Error', status: 500 },
      { status: 500 }
    );
  }
}
