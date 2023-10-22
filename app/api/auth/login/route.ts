import { byEmailAdapter, signInResponseAdapter } from '@/adapters';
import { prisma, supabase } from '@/lib';
import { compare } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const credentials = await request.json();

  try {
    const existedUser = await prisma.user.findUnique(
      byEmailAdapter({ data: credentials })
    );

    const passwordMatch = await compare(
      credentials?.password,
      existedUser.password
    );

    if (!existedUser) {
      return NextResponse.json({
        data: null,
        message: 'User doesn`t exist',
        status: 204,
      });
    }

    if (!passwordMatch) {
      return NextResponse.json({
        message: 'Incorrect password',
        data: null,
        status: 204,
      });
    }

    const { data: response } = await supabase.auth.signInWithPassword({
      email: existedUser.email,
      password: existedUser.password,
    });

    const { data, message, status } = signInResponseAdapter({
      user: existedUser,
      session: response.session,
    }).success;

    return NextResponse.json({ message, data }, { status });
  } catch (err) {
    const { message, status } = signInResponseAdapter({
      user: null,
      session: null,
    }).error;
    return NextResponse.json({ message }, { status });
  }
}
