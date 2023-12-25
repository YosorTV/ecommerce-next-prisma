'use client';

import { FC } from 'react';

import { useCart } from '@/store';
import { IoCart } from 'react-icons/io5';

import { Badge, Button, Hydrate } from '@/components/elements';

export const ShoppingIcon: FC = () => {
  const { cart, onToggle } = useCart();

  const handleToggle = () => onToggle();

  return (
    <Button
      variant='icon'
      onClick={handleToggle}
      className='relative top-0.5 flex h-10 w-10 cursor-pointer items-center'
    >
      {cart.length > 0 && (
        <Hydrate>
          <Badge counter={cart.length} />
        </Hydrate>
      )}
      <IoCart style={{ width: 32, height: 32 }} />
    </Button>
  );
};
