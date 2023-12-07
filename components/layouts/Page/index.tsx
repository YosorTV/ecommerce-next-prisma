import { FC } from 'react';

import { ClientSideRender, Footer, Header, PageTransition } from '@/components';
import { cn } from '@/lib';
import { PageLayoutProps } from '@/types';

export const PageLayout: FC<PageLayoutProps> = ({
  navigation,
  user,
  page,
  children,
  className,
}) => {
  return (
    <>
      <Header navigation={navigation} user={user} />
      <main className='relative flex min-h-screen flex-col py-24'>
        <PageTransition
          page={page}
          className={cn('container flex-1 flex-grow', className)}
        >
          {children}
          <ClientSideRender />
        </PageTransition>
      </main>
      <Footer page={page} />
    </>
  );
};
