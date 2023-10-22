import { FC } from 'react';

import { signIn } from 'next-auth/react';

import { Button, Form, Input } from '@/components/elements';
import { schemas } from '@/lib/yup';

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
    <Form
      schema={schemas.login}
      onSubmit={onSubmit}
      className='flex flex-col gap-y-5'
    >
      <Input
        name='email'
        type='email'
        label='Email'
        placeholder='Enter your email address'
      />
      <Input
        name='password'
        type='password'
        label='Password'
        placeholder='Enter your password'
      />
      <Button
        variant='basic'
        className='mt-5 text-2xl text-white hover:bg-black'
      >
        Sign In
      </Button>
    </Form>
  );
};
