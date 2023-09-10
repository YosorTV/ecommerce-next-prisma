import React from 'react';

import { signIn } from 'next-auth/react';

import { Form, Input } from '../../elements';

export const Signin = () => {
  const onSubmit = async (data: any) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/',
    });
  };

  const handleSignIn = () => {
    signIn('google');
  };

  return (
    <div className='flex w-full justify-center gap-20'>
      <Form onSubmit={onSubmit} className='flex flex-col'>
        <Input
          name='email'
          type='email'
          placeholder='email'
          className='mx-2 border p-2'
        />
        <Input
          name='password'
          type='password'
          placeholder='password'
          className='border p-2'
        />
        <button type='submit'>Submit</button>
      </Form>
      <div className='relative h-min'>
        <hr className='absolute -left-[76px] -top-[110px] h-px w-44 rotate-90' />
        <p>OR</p>
        <hr className='absolute -left-[76px] top-[130px] h-px w-44 rotate-90' />
      </div>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};
