import { SignInForm, SignInProviders, Title } from '@/components';

export const Signin = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Title level='1' className='absolute -top-52 text-4xl font-semibold'>
        Sign In
      </Title>
      <div className='flex w-full justify-center gap-20'>
        <SignInForm />
        <div className='relative top-[100px] h-min'>
          <hr className='absolute -left-[76px] -top-[110px] h-px w-44 rotate-90' />
          <p>OR</p>
          <hr className='absolute -left-[76px] top-[130px] h-px w-44 rotate-90' />
        </div>
        <SignInProviders />
      </div>
    </div>
  );
};
