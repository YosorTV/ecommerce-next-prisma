import { InputProps } from '../Form/types';

export const Input = ({
  register,
  name,
  className,
  type,
  placeholder,
  ...rest
}: InputProps) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <span className='text-base text-gray-500'>{placeholder}</span>
      <input
        {...register(name)}
        {...rest}
        type={type}
        className={`${className} min-w-[354px] cursor-pointer rounded-xl border border-gray-300 px-2 py-3 outline-none hover:border-gray-700`}
      />
    </div>
  );
};
