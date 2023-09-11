import { FC } from 'react';

import { ButtonProps } from '@/types';

import { DefaultBtn } from '@/components/elements/Button/DefaultBtn';
import { SignInBtn } from '@/components/elements/Button/SignInBtn';
import { SignOutBtn } from '@/components/elements/Button/SignOutBtn';

export const Button: FC<ButtonProps> = ({
  type = 'button',
  children,
  className = '',
  variant = 'basic',
  onClick = () => {},
  ...rest
}) => {
  switch (variant) {
    case 'signIn':
      return <SignInBtn className={className} />;
    case 'signOut':
      return <SignOutBtn className={className} />;
    default:
      return (
        <DefaultBtn
          {...rest}
          type={type}
          onClick={onClick}
          className={className}
        >
          {children}
        </DefaultBtn>
      );
  }
};
