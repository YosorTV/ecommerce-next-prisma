'use client';

import { SignInForm, SignInProviders, Title } from '@/components';
import { cn } from '@/lib';

import { abril } from '@/assets/fonts';

export const Signin = () => {
  return (
    <div className='relative flex flex-col items-center justify-center gap-y-10 md:gap-y-40 md:pb-20'>
      <Title
        level='1'
        className={cn(
          'text-center text-5xl underline md:pl-12',
          abril.className
        )}
      >
        Sign In
      </Title>

      <div className='relative flex w-full flex-col justify-center gap-10 md:flex-row md:gap-20'>
        <SignInForm />
        <div className='flex h-min items-center justify-center gap-5 md:absolute'>
          <hr className='h-px w-44 rotate-0 md:absolute md:-left-[58px] md:top-0 md:rotate-90' />
          <p className='md:absolute md:left-[20px] md:top-[102px]'>OR</p>
          <hr className='h-px w-44 rotate-0 md:absolute md:-left-[58px] md:top-[230px] md:rotate-90' />
        </div>
        <SignInProviders />
      </div>
    </div>
  );
};
