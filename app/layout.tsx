import { RootLayoutProps } from '@/types';

import { BaseLayout } from '@/components/layouts';
import { getNavigation, getPageName } from '@/helpers/getters';

import './global.css';

export const metadata = {
  title: {
    default: 'Home | DropSor',
    template: '%s | DropSor',
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const { page } = getPageName();
  const navigation = getNavigation(page);

  return (
    <BaseLayout page={page} navigation={navigation}>
      {children}
    </BaseLayout>
  );
}
