import { RootLayoutProps } from '@/types';

import './globals.css';
import { BaseLayout } from '@/components/layouts';

export const metadata = {
  title: {
    default: 'DropSor',
    template: '%s | DropSor',
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return <BaseLayout>{children}</BaseLayout>;
}
