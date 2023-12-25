import React from 'react';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/elements';

export const SignInProviders = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <Button
        variant='basic'
        className='btn rounded-none border-none bg-primary outline-none'
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        Continue with Google
      </Button>
      <Button
        variant='basic'
        className='btn rounded-none border-none bg-primary outline-none'
        onClick={() => signIn('facebook', { callbackUrl: '/' })}
      >
        Continue with Facbook
      </Button>
      <Button
        variant='basic'
        className='btn rounded-none border-none bg-primary outline-none'
        onClick={() => signIn('apple', { callbackUrl: '/' })}
      >
        Continue with Apple
      </Button>
    </div>
  );
};
