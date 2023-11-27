import { SignInForm, SignInProviders, Title } from '@/components';

export const Signin = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <Title
        level='1'
        className='text-4xl font-semibold md:absolute md:-top-[18vh] md:left-72'
      >
        Sign In
      </Title>
      <div className='relative flex w-full flex-col justify-center gap-10 md:flex-row md:gap-20'>
        <SignInForm />
        <div className='flex h-min items-center justify-center gap-5 md:absolute'>
          <hr className='h-px w-44 rotate-0 md:absolute md:-left-[58px] md:top-0 md:rotate-90' />
          <p className='md:absolute md:left-[20px] md:top-[102px]'>OR</p>
          <hr className='h-px w-44 rotate-0 md:absolute md:-left-[58px] md:top-[230px] md:rotate-90' />
        </div>
        <SignInProviders />
      </div>
    </div>
  );
};
