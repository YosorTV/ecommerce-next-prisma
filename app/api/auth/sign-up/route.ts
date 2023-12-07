import {
  byEmailAdapter,
  createdUserAdapter,
  userResponseAdapter,
} from '@/adapters';
import { supabase } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';
import { createUserData } from '@/services/server';

export async function POST(request: NextRequest) {
  const { data } = await createdUserAdapter({ data: await request.json() });
  const existingUser = await prisma.user.findUnique(byEmailAdapter({ data }));

  if (!existingUser) {
    const { data: response } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    const user = await createUserData({
      data: { ...data, id: response?.user?.id },
    });

    if (user) {
      const { message, status } = userResponseAdapter().success;
      return NextResponse.json({ message, status }, { status });
    }
  } else {
    const { message, status } = userResponseAdapter().existed;
    return NextResponse.json({ message, status }, { status });
  }
}
