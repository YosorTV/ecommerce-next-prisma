'use server';

import { byEmailAdapter } from '@/adapters';
import { prisma } from '@/lib';

export const getUserData = async ({ data }: { data: any }) => {
  const user = await prisma.user.findUnique(byEmailAdapter({ data }));

  if (user) {
    const session = await prisma.account.findFirst({
      where: { userId: user.id },
    });

    return {
      data: { user, session },
    };
  }

  return {
    data: {
      user: null as null,
      session: null as null,
    },
    error: true,
  };
};
