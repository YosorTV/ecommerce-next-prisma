import { authOptions } from '@/lib';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';

export const getSession = async () => {
  const session = (await getServerSession(authOptions)) as Session;

  return session;
};
