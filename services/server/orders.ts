'use server';

import { prisma } from '@/lib';

export const getOrders = async ({ id }: { id: string }) => {
  const orders = await prisma.order.findMany({
    where: { userId: id },
    include: { products: true },
  });

  return orders;
};
