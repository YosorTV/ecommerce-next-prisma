import React, { FC } from 'react';

import { BaseLayoutProps } from '@/types/layouts/base';

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body className='overflow-hidden bg-gray-100'>{children}</body>
    </html>
  );
};
