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
          className='my-[100px] flex h-screen flex-col'
        >
          {children}
        </PageTransition>
      </main>
      <Footer page={page} />
    </>
  );
};
