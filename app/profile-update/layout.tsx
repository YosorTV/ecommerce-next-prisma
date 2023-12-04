import { BaseLayoutProps } from '@/types';

import { PageLayout } from '@/components/layouts';
import { getPageName } from '@/helpers/getters';

export const metadata = {
  title: 'Update Password',
};

const navigation = [
  {
    id: 1,
    text: `Sign in`,
    href: '/login',
    className: 'text-base font-semibold normal-case text-black',
  },
];

export default async function UpdatePasswordLayout({
  children,
}: BaseLayoutProps) {
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
