import { byEmailAdapter, signInResponseAdapter } from '@/adapters';
import { prisma, supabase } from '@/lib';
import { compare } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const credentials = await request.json();

    const existedUser = await prisma.user.findUnique(
      byEmailAdapter({ data: credentials })
    );

    const passwordMatch = await compare(
      credentials.password,
      existedUser.password
    );

    if (!existedUser) {
      const { message, status } = signInResponseAdapter({ key: 'existed' });
      return NextResponse.json({ message }, { status });
    }

    if (!passwordMatch) {
      const { message, status } = signInResponseAdapter({ key: 'password' });
      return NextResponse.json({ message }, { status });
    }

    const { error, data } = await supabase.auth.signInWithPassword({
      email: existedUser.email,
      password: existedUser.password,
    });

    if (!error) {
      const response = signInResponseAdapter({
        key: 'success',
        user: existedUser,
        session: data.session,
      });

      const { status, ...rest } = response;

      return NextResponse.json(rest, { status });
    }

    const { message, status } = signInResponseAdapter({ key: 'error' });
    return NextResponse.json({ message }, { status });
  } catch (err) {
    console.error('err: ', err);
    return NextResponse.json({ message: err }, { status: err.status });
  }
}
