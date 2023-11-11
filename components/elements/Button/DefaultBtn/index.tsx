import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

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
      className={`${className} min-w-[354px] rounded-3xl border border-gray-300 bg-gray-700 px-2 py-3 outline-none transition-colors ease-linear hover:border-gray-700`}
      {...rest}
    >
      {children}
    </button>
  );
};
