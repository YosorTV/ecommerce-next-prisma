import { RootLayoutProps } from '@/types';

import { PageLayout } from '@/components/layouts';

export const metadata = {
  title: 'Sign in',
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}
