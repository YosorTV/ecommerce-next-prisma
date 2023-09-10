import { createdUserAdapter, userResponseAdapter } from '@/adapters';
import { supabase } from '@/lib';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const user = await createdUserAdapter({ data: await request.json() });

  try {
    const accessToken = jwt.sign({ ...user }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    const { data } = await supabase.auth.signUp({
      email: user.data.email,
      password: user.data.password,
    });

    const userId = data.user.id;

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (existingUser) {
      const { message, status } = userResponseAdapter().existed;
      return NextResponse.json({ message }, { status });
    }

    if (!existingUser) {
      await prisma.user.create({
        data: {
          id: userId,
          name: user.data.name,
          email: user.data.email,
          password: user.data.password,
        },
      });
    }

    const newAcc = await prisma.account.create({
      data: {
        userId,
        providerAccountId: userId,
        access_token: accessToken,
        type: 'credentials',
        provider: 'supabase',
        token_type: 'Bearer',
        expires_at: 24 * 60 * 60,
      },
    });

    if (newAcc) {
      const { message, status } = userResponseAdapter().success;
      return NextResponse.json({ message }, { status });
    }
  } catch (error) {
    const { message, status } = userResponseAdapter().error;
    return NextResponse.json({ message }, { status });
  }
}
