import React from 'react';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/elements';

export const SignInProviders = () => {
  const handleGoogle = async () => {
    const res = await signIn('google', { callbackUrl: '/' });
    console.log('res: ', res);
  };
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <Button
        variant='basic'
        className='btn rounded-none border-none bg-primary outline-none'
        onClick={handleGoogle}
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
    </div>
  );
};
