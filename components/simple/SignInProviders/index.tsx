import React from 'react';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/elements';

export const SignInProviders = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 pb-2.5'>
      <Button
        variant='basic'
        className='bg-transparent text-black'
        onClick={() => signIn('google')}
      >
        Continue with Google
      </Button>
      <Button
        variant='basic'
        className='border bg-transparent text-black'
        onClick={() => signIn('facebook')}
      >
        Continue with Facbook
      </Button>
    </div>
  );
};
