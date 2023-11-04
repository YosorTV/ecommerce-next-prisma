import { FC } from 'react';

import { FooterProps } from '@/types';
import Link from 'next/link';

export const Footer: FC<FooterProps> = ({ page }) => {
  return (
    <footer className='fixed bottom-0 left-0 flex h-[50px] w-full items-center justify-center border-t border-b-gray-300 bg-white px-9 py-6'>
      {page === '/login' && (
        <Link
          href='/reset-password'
          className='font-semibold text-black underline'
        >
          Can`t sign in ?
        </Link>
      )}
    </footer>
  );
};
