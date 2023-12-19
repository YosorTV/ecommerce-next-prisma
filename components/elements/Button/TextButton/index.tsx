import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '@/lib';

import { lobster } from '@/assets/fonts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  onClick: () => void;
  children: ReactNode;
  rest?: any;
}

export const TextButton: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  rest,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex min-w-btn items-center justify-start text-2xl text-gray-900 underline',
        lobster.className,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
