import { FC } from 'react';

import { Navbar } from '@/components';
import { HeaderProps } from '@/types';

import { ShoppingCart } from '../ShoppingCart';

export const Header: FC<HeaderProps> = ({ navigation, user }) => {
  return (
    <header className='fixed left-0 top-0 z-50 w-full'>
      <Navbar params={navigation} user={user} />
      <ShoppingCart />
    </header>
  );
};
