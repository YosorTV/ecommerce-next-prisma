import { byEmailAdapter, ResetPassResponseAdapter } from '@/adapters';
import { prisma, supabase } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const user = await prisma.user.findUnique(
      byEmailAdapter({ data: await request.json() })
    );
    if (user.id) {
      await supabase.auth.resetPasswordForEmail(user.email);

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
