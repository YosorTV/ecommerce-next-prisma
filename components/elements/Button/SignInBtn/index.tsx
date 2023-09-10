'use client';

import { FC } from 'react';

import { signIn } from 'next-auth/react';

type SignInBtnProps = {
  className?: string;
};

export const SignInBtn: FC<SignInBtnProps> = ({ className = '' }) => {
  const handleClick = () => signIn();

  return (
    <button type='button' onClick={handleClick} className={className}>
      Sign In
    </button>
  );
};
