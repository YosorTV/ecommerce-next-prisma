'use client';

import { signUp } from '@/services';
import Link from 'next/link';

import { Button, Form, Input } from '@/components/elements';

export const SignUpForm = () => {
  const onSubmit = async (data: any) => {
    await signUp({ data });
  };

  return (
    <Form onSubmit={onSubmit} className='flex w-full flex-col gap-5'>
      <Input
        name='name'
        type='text'
        label='How should we call you?'
        placeholder='Enter your profile name'
        className='border p-2'
      />
      <Input
        name='email'
        type='email'
        label='What is your email?'
        placeholder='Enter your email address'
        className='border p-2'
      />
      <Input
        name='password'
        type='password'
        label='Create a password'
        placeholder='Enter your password'
        className='border p-2'
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
          className='w-full text-xl text-white hover:bg-black'
        >
          Create an account
        </Button>
      </div>
    </Form>
  );
};
