import { FC } from 'react';

import Image from 'next/image';

interface AvatarProps {
  path: string;
  height?: number;
  width?: number;
  rest?: any;
  alt?: string;
  tabIndex: number;
}

export const Avatar: FC<AvatarProps> = ({
  path,
  alt,
  height = 40,
  width = 40,
  ...rest
}) => {
  return (
    <Image
      src={path}
      alt={alt}
      height={height}
      width={width}
      className='shadow-avatar rounded-full p-1'
      {...rest}
    />
  );
};
