import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '@/lib';

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
        'flex min-w-btn items-center justify-center rounded-full border border-gray-300 bg-gray-700 px-2 py-3 text-sm font-medium text-white outline-none transition-colors ease-linear hover:border-gray-700',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
