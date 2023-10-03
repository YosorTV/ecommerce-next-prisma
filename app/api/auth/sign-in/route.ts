import { byEmailAdapter, signInResponseAdapter } from '@/adapters';
import { prisma, supabase } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const user = await prisma.user.findUnique(
      byEmailAdapter({ data: await request.json() })
    );

    const { data: response } = await supabase.auth.signInWithPassword(user);

    if (response) {
      const { session } = response;

      const { message, data, status } = signInResponseAdapter({
        user,
        session,
      }).success;

      return NextResponse.json({ message, data }, { status });
    }
  } catch (err) {
    const { message, status } = signInResponseAdapter({
      user: null,
      session: null,
    }).error;
    return NextResponse.json({ message }, { status });
  }
}
