import { FC } from 'react';

import { cn } from '@/lib';

import { roboto } from '@/assets/fonts';
import { BaseLayoutProps } from '@/types/layouts/base';

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body className={cn('mx-4 overflow-x-clip', roboto.className)}>
        {children}
      </body>
    </html>
  );
};
