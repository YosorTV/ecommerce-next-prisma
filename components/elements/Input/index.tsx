import { InputProps } from '../Form/types';

export const Input = ({
  register,
  name,
  className,
  type,
  ...rest
}: InputProps) => {
  return (
    <input {...register(name)} className={className} type={type} {...rest} />
  );
};
