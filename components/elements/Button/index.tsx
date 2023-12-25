import React, { FC } from 'react';

import { ButtonComponentType, ButtonProps } from '@/types';

import { DefaultBtn } from '@/components/elements/Button/DefaultBtn';
import { IconBtn } from '@/components/elements/Button/IconBtn';
import { SignInBtn } from '@/components/elements/Button/SignInBtn';
import { SignOutBtn } from '@/components/elements/Button/SignOutBtn';
import { TextButton } from '@/components/elements/Button/TextButton';

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'basic',
  className = '',
  ...rest
}) => {
  const Buttons: ButtonComponentType = {
    signIn: <SignInBtn className={className} {...rest} />,
    signOut: <SignOutBtn className={className} {...rest} />,
    text: (
      <TextButton onClick={onClick} className={className}>
        {children}
      </TextButton>
    ),
    icon: (
      <IconBtn onClick={onClick} className={className}>
        {children}
      </IconBtn>
    ),
    basic: (
      <DefaultBtn type={type} onClick={onClick} className={className} {...rest}>
        {children}
      </DefaultBtn>
    ),
  };

  return <>{Buttons[variant]}</>;
};
