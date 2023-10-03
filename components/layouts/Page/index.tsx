import { FC } from 'react';

import { PageLayoutProps } from '@/types';

import { Navbar } from '@/components/simple';
import Link from 'next/link';

export const PageLayout: FC<PageLayoutProps> = ({
  user,
  children,
  navigation,
}) => {
  return (
    <>
      <header className='fixed left-0 top-0 z-50 w-full'>
        <Navbar params={navigation} user={user} />
      </header>
      <main className='flex h-screen flex-col'>{children}</main>
      <footer className='fixed bottom-0 left-0 flex w-full items-center justify-center border-t border-b-gray-300 bg-white px-9 py-6'>
        <Link
          href='/forgot-password'
          className='font-semibold text-black underline'
        >
          Can`t sign in ?
        </Link>
      </footer>
    </>
  );
};
