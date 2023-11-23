import React from 'react';

import { InputProps } from '../Form/types';

export const Input = React.forwardRef(
  (
    {
      register,
      name,
      className,
      error,
      placeholder,
      type,
      label,
      ...rest
    }: InputProps,
    ref
  ) => {
    return (
      <div className='relative flex flex-col gap-y-2'>
        <label htmlFor={name} className='text-base text-gray-500'>
          {label}
        </label>
        <input
          ref={ref}
          {...register(name)}
          {...rest}
          type={type}
          placeholder={placeholder}
          className={`${className} ${
            !error ? 'border-gray-300 hover:border-gray-700' : 'border-red-400'
          } h-11 min-w-[354px] cursor-pointer rounded-full border px-2 py-3 text-sm outline-none`}
        />
        {error && (
          <span
            className={`absolute text-xs text-red-500 ${
              error.length > 30 ? ' -bottom-8' : '-bottom-4'
            }`}
          >
            *{error}
          </span>
        )}
      </div>
    );
  }
);
