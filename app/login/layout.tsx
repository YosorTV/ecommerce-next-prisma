import { authOptions } from '@/lib';
import { BaseLayoutProps } from '@/types';
import { headers } from 'next/headers';
import { getServerSession } from 'next-auth';

import { PageLayout } from '@/components/layouts';

export const metadata = {
  title: 'Sign in',
};

const navigation = [
  {
    id: 1,
    text: `Create an account`,
    href: '/signup',
    className: 'text-base font-semibold normal-case text-black',
  },
];

export default async function LoginLayout({ children }: BaseLayoutProps) {
  const page = headers().get('page_name') as string;
  const user = await getServerSession(authOptions);

  return (
    <PageLayout page={page} user={user} navigation={navigation}>
      {children}
    </PageLayout>
  );
}
