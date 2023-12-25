import { PageLayout } from '@/components';
import { authOptions } from '@/lib';
import { BaseLayoutProps } from '@/types';
import { getServerSession } from 'next-auth';

export const metadata = {
  title: {
    default: 'Product Details',
  },
};

export default async function Layout({ children }: BaseLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <PageLayout className='container flex w-full justify-center pb-10'>
      {session?.user ? children : <p>You need to be logged in</p>}
    </PageLayout>
  );
}
