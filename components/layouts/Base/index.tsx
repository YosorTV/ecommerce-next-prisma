import { cn } from '@/lib';

import { roboto } from '@/assets/fonts';
import { Footer, Header } from '@/components/simple';
import { BaseLayoutProps } from '@/types/layouts/base';

export async function BaseLayout({
  session,
  children,
  navigation,
  page,
}: BaseLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body className={cn('h-full overflow-y-auto', roboto.className)}>
        <Header user={session?.user} navigation={navigation} />
        {children}
        <Footer page={page} />
      </body>
    </html>
  );
}
