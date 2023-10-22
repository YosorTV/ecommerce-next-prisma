import { FC } from 'react';

import { resetPassword } from '@/services';

import { Button, Form, Input } from '@/components/elements';
import { schemas } from '@/lib/yup';

export const ResetPasswordForm: FC = () => {
  const onSubmit = async (data: any) => {
    await resetPassword({ data });
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
        className='mt-5 text-xl text-white hover:bg-black'
      >
        Reset password
      </Button>
    </Form>
  );
};
