'use client';

import { FC } from 'react';

import { updatePassword } from '@/services';
import { useRouter } from 'next/navigation';

import { Button, Form, Input } from '@/components/elements';
import { schemas } from '@/lib/yup';

export const UpdatePasswordForm: FC = () => {
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const { status } = await updatePassword({ data });
    if (status === 201) {
      router.push('/login');
    }
  };

  return (
    <Form
      schema={schemas['update-password']}
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
        placeholder='Enter a new password'
      />
      <Button
        variant='basic'
        className='mt-5 text-xl text-white hover:bg-black'
      >
        Update password
      </Button>
    </Form>
  );
};
