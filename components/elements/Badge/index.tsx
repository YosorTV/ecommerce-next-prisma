import { FC } from 'react';

import { BadgeProps } from '@/types';

export const Badge: FC<BadgeProps> = ({ counter }) => {
  return (
    <span className='absolute bottom-4 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white'>
      {counter}
    </span>
  );
};
