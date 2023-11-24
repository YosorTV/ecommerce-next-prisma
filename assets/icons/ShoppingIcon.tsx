'use client';

import { FC } from 'react';

import { useCart } from '@/store';

import { BasketIcon } from '@/assets/icons';
import { Badge, Button, Hydrate } from '@/components/elements';

export const ShoppingIcon: FC = () => {
  const { cart, onToggle } = useCart();

  const handleToggle = () => onToggle();

  return (
    <Button
      variant='icon'
      onClick={handleToggle}
      className='relative top-0.5 flex cursor-pointer items-center'
    >
      {cart.length > 0 && (
        <Hydrate>
          <Badge counter={cart.length} />
        </Hydrate>
      )}
      <BasketIcon width={34} height={34} />
    </Button>
  );
};
