'use client';

import { FC } from 'react';

import { signOut } from 'next-auth/react';

type SignOutBtnProps = {
  className?: string;
};

export const SignOutBtn: FC<SignOutBtnProps> = ({ className = '' }) => {
  const handleClick = async () => {
    await signOut();
  };

  return (
    <button type='button' onClick={handleClick} className={className}>
      Sign Out
    </button>
  );
};
