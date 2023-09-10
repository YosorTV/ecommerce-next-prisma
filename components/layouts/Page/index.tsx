import React, { FC } from 'react';

import { BaseLayout } from '../Base';

import { LoginNav } from '@/components/simple';

export const PageLayout: FC<any> = ({ children }) => {
  return (
    <BaseLayout>
      <header className='flex flex-col'>
        <LoginNav />
      </header>
      <main className='flex h-[90vh] flex-col'>{children}</main>
    </BaseLayout>
  );
};
