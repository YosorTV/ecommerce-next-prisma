import { SignUpForm, Title } from '@/components';
import { cn } from '@/lib';
import Link from 'next/link';

import { abril } from '@/assets/fonts';

export const CreateAccount = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <div className='absolute -top-32 flex flex-col items-center gap-2.5'>
        <Title
          level='1'
          className={cn('text-4xl font-semibold', abril.className)}
        >
          Create an account
        </Title>
        <p className='inline-flex gap-x-2'>
          Already have an account?
          <Link href='/login' className='underline'>
            Sign in
          </Link>
        </p>
      </div>
      <SignUpForm />
    </div>
  );
};
