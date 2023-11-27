import { getPageName, getSession } from '@/helpers';
import { BaseLayoutProps } from '@/types';

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
  const session = await getSession();
  const { page } = getPageName();

  return (
    <PageLayout
      page={page}
      user={session}
      navigation={navigation}
      className='flex h-full items-center justify-center'
    >
      {children}
    </PageLayout>
  );
}
