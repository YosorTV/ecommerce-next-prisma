import { FC } from 'react';

import { ButtonComponentType, ButtonProps } from '@/types';

import { DefaultBtn } from '@/components/elements/Button/DefaultBtn';
import { IconBtn } from '@/components/elements/Button/IconBtn';
import { SignInBtn } from '@/components/elements/Button/SignInBtn';
import { SignOutBtn } from '@/components/elements/Button/SignOutBtn';

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'basic',
  className = '',
  ...rest
}) => {
  const Buttons: ButtonComponentType = {
    signIn: <SignInBtn className={className} />,
    signOut: <SignOutBtn className={className} />,
    icon: (
      <IconBtn onClick={onClick} className={className}>
        {children}
      </IconBtn>
    ),
    basic: (
      <DefaultBtn {...rest} type={type} onClick={onClick} className={className}>
        {children}
      </DefaultBtn>
    ),
  };

  return <>{Buttons[variant]}</>;
};
