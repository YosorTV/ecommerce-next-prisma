import { FC } from 'react';

import { resetPassword } from '@/services';

import { Button, Form, Input } from '@/components/elements';
import { toaster } from '@/lib/toast';
import { schemas } from '@/lib/yup';

export const ResetPasswordForm: FC = () => {
  const onSubmit = async (data: any) => {
    const { message, status } = await resetPassword({ data });

    const response: any = {
      201: () => toaster({ key: 'success', message }),
      404: () => toaster({ key: 'error', message }),
    };

    response[status]();
  };

  return (
    <Form
      schema={schemas['reset-password']}
      onSubmit={onSubmit}
      className='flex flex-col gap-y-5'
    >
      <Input
        name='email'
        type='email'
        label='Email'
        placeholder='Enter your email address'
      />
      <Button
        variant='basic'
        className='rounded-full border-none bg-teal-700 py-2.5 font-medium text-white hover:bg-teal-800'
      >
        Reset
      </Button>
    </Form>
  );
};
