import { FC } from 'react';

import Image from 'next/image';

interface AvatarProps {
  path: string;
  height?: number;
  width?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({
  path,
  alt,
  height = 48,
  width = 48,
}) => {
  return (
    <Image
      src={path}
      alt={alt}
      height={height}
      width={width}
      className='rounded-full'
    />
  );
};
