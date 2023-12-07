'use client';

import { FC } from 'react';

import { updatePassword } from '@/services';
import { useRouter } from 'next/navigation';

import { Button, Form, Input } from '@/components/elements';
import { toaster } from '@/lib/toast';
import { schemas } from '@/lib/yup';

export const UpdatePasswordForm: FC = () => {
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const { status, message } = await updatePassword({ data });

    const response: any = {
      201: () => {
        toaster({ key: 'success', message });
        setTimeout(() => router.push('/login'), 1500);
      },
      500: () => toaster({ key: 'error', message }),
    };

    return response[status]();
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
        className='rounded-full border-none bg-teal-700 py-2.5 font-medium text-white hover:bg-teal-800'
      >
        Update
      </Button>
    </Form>
  );
};
