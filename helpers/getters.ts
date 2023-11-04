import { authOptions } from '@/lib';
import { headers } from 'next/headers';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';

export const getPageName = () => {
  const page = headers().get('path') as string;

  return { page };
};

export const getSession = async () => {
  const session = (await getServerSession(authOptions)) as Session;

  return session;
};
