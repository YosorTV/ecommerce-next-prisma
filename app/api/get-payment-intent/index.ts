import { prisma } from '@/lib';
import { NextResponse } from 'next/server';

import { stripeApi } from '@/lib/stripe';

export async function GET() {
  const { stripe } = stripeApi();
}
