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
      <div className='flex flex-col gap-y-2'>
        <label htmlFor={name} className='text-base text-gray-500'>
          {label}
        </label>
        <input
          ref={ref}
          {...register(name)}
          {...rest}
          type={type}
          placeholder={placeholder}
          className={`${className} min-w-[354px] cursor-pointer rounded-xl border border-gray-300 px-2 py-3 outline-none hover:border-gray-700`}
        />
      </div>
    );
  }
);
