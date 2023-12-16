import { authOptions, cn } from '@/lib';
import { getServerSession } from 'next-auth';

import { roboto } from '@/assets/fonts';
import { Footer, Header } from '@/components/simple';
import { BaseLayoutProps } from '@/types/layouts/base';

export async function BaseLayout({
  children,
  navigation,
  page,
}: BaseLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <head />
      <body className={cn('mx-4 overflow-x-clip', roboto.className)}>
        <Header user={session?.user} navigation={navigation} />
        {children}
        <Footer page={page} />
      </body>
    </html>
  );
}
