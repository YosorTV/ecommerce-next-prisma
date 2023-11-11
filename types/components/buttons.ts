import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonComponentType = {
  signIn: ReactNode;
  signOut: ReactNode;
  basic: ReactNode;
};

export type BtnVariants = 'basic' | 'signIn' | 'signOut';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariants;
  children?: ReactNode;
  onClick?: () => void;
}
