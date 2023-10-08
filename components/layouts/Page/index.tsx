import { FC } from 'react';

import { Footer, Header, PageTransition } from '@/components';
import { PageLayoutProps } from '@/types';

export const PageLayout: FC<PageLayoutProps> = ({
  navigation,
  user,
  page,
  children,
}) => {
  return (
    <>
      <Header navigation={navigation} user={user} />
      <main className='container mx-auto'>
        <PageTransition
          page={page}
          className='mt-[72px] flex h-[calc(100vh-72px)] flex-col'
        >
          {children}
        </PageTransition>
      </main>
      <Footer page={page} />
    </>
  );
};
