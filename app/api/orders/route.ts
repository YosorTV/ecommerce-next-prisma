import { NextRequest, NextResponse } from 'next/server';

import { getOrders } from '@/services/server/orders';

export async function GET(req: NextRequest) {
  const id = new URL(req.url).searchParams.get('id');

  try {
    const data = await getOrders({ id });
    if (data.length) {
      return NextResponse.json(
        { message: 'Your order list', data },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'Empty history', data: [] },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: 'Error', error: err }, { status: 200 });
  }
}
