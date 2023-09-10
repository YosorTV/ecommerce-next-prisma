import { ButtonHTMLAttributes, ReactNode } from 'react';

export type BtnVariants = 'basic' | 'icon' | 'signIn' | 'signOut';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariants;
  children?: ReactNode;
  onClick?: () => void;
}
