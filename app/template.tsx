import { PageTransition } from '@/components';
import { authOptions } from '@/lib';
import { TemaplateProps } from '@/types';
import { getServerSession } from 'next-auth';

export default async function Template({ children }: TemaplateProps) {
  const session = await getServerSession(authOptions);

  return <PageTransition session={session}>{children}</PageTransition>;
}
