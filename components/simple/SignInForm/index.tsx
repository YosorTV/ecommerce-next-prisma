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
        autoComplete='email'
      />
      <Input
        name='password'
        type='password'
        label='Password'
        placeholder='Enter your password'
        autoComplete='password'
      />
      <Button
        variant='basic'
        className='rounded-full border-none bg-teal-700 py-2.5 font-medium text-white hover:bg-teal-800'
      >
        Sign In
      </Button>
    </Form>
  );
};
