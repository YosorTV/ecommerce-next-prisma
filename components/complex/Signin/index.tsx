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
    <div>
      <Form onSubmit={onSubmit}>
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
      <hr />
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};
