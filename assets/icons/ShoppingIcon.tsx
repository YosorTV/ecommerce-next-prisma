'use client';

import { FC } from 'react';

import { useCart } from '@/store';
import { IoCart } from 'react-icons/io5';

import { Badge, Button, Hydrate } from '@/components/elements';

export const ShoppingIcon: FC = () => {
  const cartStore = useCart();

  const handleToggle = () => cartStore.onToggle();

  return (
    <Button
      variant='icon'
      onClick={handleToggle}
      className='relative top-0.5 flex h-10 w-10 cursor-pointer items-center'
    >
      {cartStore.cart.length > 0 && (
        <Hydrate>
          <Badge counter={cartStore.cart.length} />
        </Hydrate>
      )}
      <IoCart style={{ width: 32, height: 32 }} />
    </Button>
  );
};
