import { getPageName } from '@/helpers';
import { BaseLayoutProps } from '@/types';

import { PageLayout } from '@/components/layouts';

export const metadata = {
  title: 'Reset Passwrd',
};

const navigation = [
  {
    id: 1,
    text: `Create an account`,
    href: '/signup',
    className: 'text-base font-semibold normal-case text-black',
  },
];

export default async function ResetPasswordLayout({
  children,
}: BaseLayoutProps) {
  const { page } = getPageName();

  return (
    <PageLayout page={page} navigation={navigation}>
      {children}
    </PageLayout>
  );
}
