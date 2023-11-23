import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  onClick: () => void;
  children: ReactNode;
}

export const IconBtn: FC<ButtonProps> = ({
  onClick,
  children,
  className = 'text-white',
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${className} rounded-full border-none bg-none outline-none`}
    >
      {children}
    </button>
  );
};
