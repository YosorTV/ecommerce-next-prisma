import { BaseLayoutProps } from '@/types';

import { PageLayout } from '@/components/layouts';

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
  return (
    <PageLayout page='profile-update' navigation={navigation}>
      {children}
    </PageLayout>
  );
}
