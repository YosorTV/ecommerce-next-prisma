import { ElementType, FC } from 'react';

import { TitleProps } from '@/types';

export const Title: FC<TitleProps> = ({ level, className = '', children }) => {
  const Tag: ElementType = `h${level}`;
  return <Tag className={className}>{children}</Tag>;
};
