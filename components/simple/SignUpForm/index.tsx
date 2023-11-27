'use client';

import { signUp } from '@/services';
import Link from 'next/link';

import { Button, Form, Input } from '@/components/elements';
import { schemas } from '@/lib/yup';

export const SignUpForm = () => {
  const onSubmit = async (data: any) => {
    await signUp({ data });
  };

  return (
    <Form
      onSubmit={onSubmit}
      schema={schemas.signup}
      className='flex w-full flex-col gap-5'
    >
      <Input
        name='name'
        type='text'
        label='How should we call you?'
        placeholder='Enter your profile name'
        className='border p-2'
        autoComplete='name'
      />
      <Input
        name='email'
        type='email'
        label='What is your email?'
        placeholder='Enter your email address'
        className='border p-2'
        autoComplete='email'
      />
      <Input
        name='password'
        type='password'
        label='Create a password'
        placeholder='Enter your password'
        className='border p-2'
        autoComplete='password'
      />
      <div className='relative top-8 flex flex-col gap-y-5'>
        <p>
          By creating an account, you agree to the{' '}
          <span className='inline-flex gap-x-1.5'>
            <Link href='/terms-of-use' className='underline'>
              Terms of use
            </Link>
            and{' '}
            <Link href='/privacy-policy' className='underline'>
              Privacy Policy
            </Link>
          </span>
        </p>
        <Button
          variant='basic'
          className='rounded-full border-none bg-teal-700 py-2.5 font-medium text-white hover:bg-teal-800'
        >
          Create an account
        </Button>
      </div>
    </Form>
  );
};
