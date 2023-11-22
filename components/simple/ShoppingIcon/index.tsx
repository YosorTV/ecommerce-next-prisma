'use client';

import { FC } from 'react';

import { useCart } from '@/store';
import { AiFillShopping } from 'react-icons/ai';

import { Badge, Icon } from '@/components/elements';

export const ShoppingIcon: FC = () => {
  const { cart, onToggle } = useCart();

  const handleToggle = () => onToggle();

  return (
    <Icon
      onClick={handleToggle}
      className='relative flex cursor-pointer items-center text-3xl'
    >
      {cart.length > 0 && <Badge counter={cart.length} />}
      <AiFillShopping />
    </Icon>
  );
};
