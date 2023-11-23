import React, { FC } from 'react';

import { roboto } from '@/assets/fonts';
import { BaseLayoutProps } from '@/types/layouts/base';

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body className={`overflow-hidden ${roboto.className}`}>{children}</body>
    </html>
  );
};
