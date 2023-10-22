import { BaseLayoutProps } from '@/types';

import { PageLayout } from '@/components/layouts';

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
  return (
    <PageLayout page='sign-up' navigation={navigation}>
      {children}
    </PageLayout>
  );
}
