import { FC } from 'react';

import { IconProps } from '@/types';

export const Icon: FC<IconProps> = ({ children, className, onClick }) => {
  return (
    <figure className={className} onClick={onClick} aria-hidden>
      {children}
    </figure>
  );
};
