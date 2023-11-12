import { FC } from 'react';

import { IconProps } from '@/types';

export const Icon: FC<IconProps> = ({ children, className }) => {
  return <figure className={className}>{children}</figure>;
};
