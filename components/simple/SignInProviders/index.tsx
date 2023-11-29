import React from 'react';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/elements';

export const SignInProviders = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <Button
        variant='basic'
        className='border-none bg-teal-700 outline-none hover:bg-teal-800'
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        Continue with Google
      </Button>
      <Button
        variant='basic'
        className='border-none bg-teal-700 outline-none hover:bg-teal-800'
        onClick={() => signIn('facebook', { callbackUrl: '/' })}
      >
        Continue with Facbook
      </Button>
      <Button
        variant='basic'
        className='border-none bg-teal-700 outline-none hover:bg-teal-800'
        onClick={() => signIn('apple', { callbackUrl: '/' })}
      >
        Continue with Apple
      </Button>
    </div>
  );
};
