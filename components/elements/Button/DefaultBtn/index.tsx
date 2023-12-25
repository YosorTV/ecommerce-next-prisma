import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '@/lib';

import { lobster } from '@/assets/fonts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  onClick: () => void;
  children: ReactNode;
  rest?: any;
}

export const DefaultBtn: FC<ButtonProps> = ({
  onClick,
  children,
  className = 'text-white',
  rest,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'btn-primary btn flex min-w-btn items-center justify-center px-2 py-3 text-lg font-medium text-white outline-none transition-all ease-linear',
        lobster.className,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
