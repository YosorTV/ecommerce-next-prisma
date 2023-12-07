'use client';

import { FC } from 'react';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { signInParamsAdapter } from '@/adapters/auth';
import { SignInAdapterProps } from '@/adapters/auth/types';
import { Button, Form, Input } from '@/components/elements';
import { toaster } from '@/lib/toast';
import { schemas } from '@/lib/yup';

export const SignInForm: FC = () => {
  const router = useRouter();

  const onSubmit = async (credentials: SignInAdapterProps) => {
    const { error, url } = await signIn(
      'credentials',
      signInParamsAdapter(credentials)
    );

    if (error) return toaster({ key: 'error', message: error });

    router.push(url);
    router.refresh();
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
