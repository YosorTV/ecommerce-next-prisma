import { signInResponseAdapter } from '@/adapters';
import { compare } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

import { getUserData } from '@/services/server';

export async function POST(request: NextRequest) {
  const credentials = await request.json();

  const { data, error } = await getUserData({ data: credentials });

  if (error) {
    const { message, status } = signInResponseAdapter({ key: 'existed' });
    return NextResponse.json({ message }, { status });
  }

  if (data.session.provider === 'google') {
    const response = signInResponseAdapter({
      key: 'success',
      user: data.user,
      session: data.session,
    });

    const { status, ...rest } = response;

    return NextResponse.json(rest, { status });
  }

  if (data.session.provider === 'supabase') {
    const passwordMatch = await compare(
      credentials.password,
      data.user.password
    );

    if (!passwordMatch) {
      const { message, status } = signInResponseAdapter({ key: 'password' });
      return NextResponse.json({ message }, { status });
    }

    const response = signInResponseAdapter({
      key: 'success',
      user: data.user,
      session: data.session,
    });

    const { status, ...rest } = response;

    return NextResponse.json(rest, { status });
  }
}
