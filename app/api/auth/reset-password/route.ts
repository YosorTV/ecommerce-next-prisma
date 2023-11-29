import { byEmailAdapter, ResetPassResponseAdapter } from '@/adapters';
import { prisma, supabase } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const existedUser = await prisma.user.findUnique(byEmailAdapter({ data }));
    if (existedUser) {
      await supabase.auth.resetPasswordForEmail(existedUser.email);

      const { message, status } = ResetPassResponseAdapter().success;
      return NextResponse.json({ message }, { status });
    }
    const { message, status } = ResetPassResponseAdapter().existed;
    return NextResponse.json({ message }, { status });
  } catch (e) {
    const { message, status } = ResetPassResponseAdapter().error;
    return NextResponse.json({ message }, { status });
  }
}
