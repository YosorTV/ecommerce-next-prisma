import { authOptions } from '@/lib';
import { BaseLayoutProps } from '@/types';
import { getServerSession } from 'next-auth';

import { PageLayout } from '@/components/layouts';

export const metadata = {
  title: 'Home',
};

const navigation = [
  {
    id: 1,
    text: 'Sign In',
    href: '/login',
    className: 'text-base font-semibold normal-case text-black',
  },
];

export default async function RootLayout({ children }: BaseLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <PageLayout navigation={navigation} user={session?.user}>
      {children}
    </PageLayout>
  );
}
