import { BaseLayoutProps } from '@/types';

import { PageLayout } from '@/components/layouts';
import { getPageName } from '@/helpers/getters';

export const metadata = {
  title: 'Sign up',
};

const navigation = [
  {
    id: 1,
    href: '/login',
    text: 'Sign In',
    className: 'text-base font-semibold capitalize text-black',
  },
];

export default async function SignupLayout({ children }: BaseLayoutProps) {
  const { page } = getPageName();

  return (
    <PageLayout
      page={page}
      navigation={navigation}
      className='flex h-full items-center justify-center'
    >
      {children}
    </PageLayout>
  );
}
