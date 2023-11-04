import { UpdateProfileAdapter, UpdateProfileResponseAdapter } from '@/adapters';
import { prisma } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  const updatedData = await UpdateProfileAdapter({ data });

  try {
    await prisma.user.update(updatedData);
    const { message, status } = UpdateProfileResponseAdapter().success;
    return NextResponse.json({ message, status }, { status });
  } catch (e) {
    console.error(e);
    const { message, status } = UpdateProfileResponseAdapter().error;
    return NextResponse.json({ message, status }, { status });
  }
}
