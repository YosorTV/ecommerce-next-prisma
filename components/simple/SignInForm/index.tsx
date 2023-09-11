import { FC } from 'react';

import { signIn } from 'next-auth/react';

import { Button, Form, Input } from '@/components/elements';

export const SignInForm: FC = () => {
  const onSubmit = async (data: any) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <Form onSubmit={onSubmit} className='flex flex-col gap-y-5'>
      <Input name='email' type='email' placeholder='Email address' />
      <Input name='password' type='password' placeholder='Password' />
      <Button
        variant='basic'
        className='mt-2.5 text-2xl text-white hover:bg-black'
      >
        Sign In
      </Button>
    </Form>
  );
};
