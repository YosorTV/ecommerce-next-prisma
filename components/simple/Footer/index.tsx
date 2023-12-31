import { FC } from 'react';

import { cn } from '@/lib';
import { FooterProps } from '@/types';
import Link from 'next/link';

import { abril, lobster } from '@/assets/fonts';

export const Footer: FC<FooterProps> = ({ page }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='fixed bottom-0 left-0 flex h-[50px] w-full items-center justify-center border-t border-b-gray-300 bg-base-100 px-5 py-2.5'>
      <div
        className={cn(
          'inline-flex w-full items-baseline justify-between text-lg text-base-200',
          lobster.className
        )}
      >
        <p className='text-base-200'>Copyright © {currentYear}</p>
        {page === '/login' && (
          <Link
            href='/reset-password'
            className={cn('text-lg text-base-200 underline', abril.className)}
          >
            Can`t sign in ?
          </Link>
        )}
        <span className='underline'>Ye.sor.dev</span>
      </div>
    </footer>
  );
};
