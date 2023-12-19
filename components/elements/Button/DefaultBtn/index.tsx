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
        'flex min-w-btn items-center justify-center border border-gray-300 bg-gray-800 px-2 py-3 text-lg font-medium text-white outline-none transition-colors ease-linear hover:bg-gray-950',
        lobster.className,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
