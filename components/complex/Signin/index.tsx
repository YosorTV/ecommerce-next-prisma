import React from 'react';

import { SignInForm, SignInProviders } from '@/components/simple';
import Link from 'next/link';

export const Signin = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <h1 className='absolute -top-44 text-4xl font-semibold'>Sign In</h1>
      <div className='flex w-full justify-center gap-20'>
        <SignInForm />
        <div className='relative top-[120px] h-min'>
          <hr className='absolute -left-[76px] -top-[110px] h-px w-44 rotate-90' />
          <p>OR</p>
          <hr className='absolute -left-[76px] top-[130px] h-px w-44 rotate-90' />
        </div>
        <SignInProviders />
      </div>
      <Link
        href='/forgot-password'
        className='absolute -bottom-44 font-semibold text-black underline'
      >
        Can`t sign in ?
      </Link>
    </div>
  );
};
