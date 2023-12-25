import { FC } from 'react';

import { cn } from '@/lib';
import { resetPassword } from '@/services';

import { abril } from '@/assets/fonts';
import { Button, Form, Input, Title } from '@/components/elements';
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
    <div className='flex flex-col gap-y-20'>
      <Title
        level='1'
        className={cn('text-center text-5xl underline', abril.className)}
      >
        Reset password
      </Title>
      <Form
        id='reset-form'
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
          className='btn rounded-none border-none bg-primary py-2.5 font-medium text-white'
        >
          Reset
        </Button>
      </Form>
    </div>
  );
};
