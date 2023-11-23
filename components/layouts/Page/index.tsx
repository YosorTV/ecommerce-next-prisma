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
      <main className='container mx-auto my-[100px] h-[85vh]'>
        <PageTransition page={page} className='flex h-full flex-col'>
          {children}
        </PageTransition>
      </main>
      <Footer page={page} />
    </>
  );
};
