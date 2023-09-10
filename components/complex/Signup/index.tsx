'use client';

import { signUp } from '@/services';

import { Form, Input } from '@/components/elements';

export const Signup = () => {
  const onSubmit = async (data: any) => {
    await signUp({ data });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        name='name'
        type='text'
        placeholder='name'
        className='mx-2 border p-2'
      />
      <Input
        name='email'
        type='email'
        placeholder='email'
        className='mx-2 border p-2'
      />
      <Input
        name='password'
        type='password'
        placeholder='password'
        className='border p-2'
      />
      {/* <Input
        name='rePassword'
        type='password'
        placeholder='Re-Enter your password'
        className='border p-2'
      /> */}
      <button type='submit'>Submit</button>
    </Form>
  );
};
