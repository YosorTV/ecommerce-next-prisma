import { NextResponse } from 'next/server';

import { productsAdapter } from '@/adapters/products';
import { stripeApi } from '@/lib/stripe';

export async function GET() {
  const { stripe } = stripeApi();

  try {
    const { data } = <Awaited<any>>await stripe.products.list();
    if (data) {
      const products = await productsAdapter({ data });

      return NextResponse.json({ data: products });
    }
  } catch (e) {
    console.error(e);
    NextResponse.json({ data: [], error: e });
  }
}
