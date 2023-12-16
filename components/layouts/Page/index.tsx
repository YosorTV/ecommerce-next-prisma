import { FC } from 'react';

import { ClientSideRender } from '@/components';
import { cn } from '@/lib';
import { PageLayoutProps } from '@/types';

export const PageLayout: FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(className)}>
      {children}
      <ClientSideRender />
    </div>
  );
};
