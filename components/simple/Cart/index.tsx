'use client';

import { FC } from 'react';

import { useCart } from '@/store';
import { CartProps } from '@/types';

import { Button } from '@/components/elements';

export const Cart: FC<CartProps> = ({ data }) => {
  const { onAdd } = useCart();

  const handleAdd = () => onAdd(data);

  return (
    <Button
      className='my-12 rounded-md border-none bg-teal-700 px-6 py-2 font-medium text-white hover:bg-teal-800'
      onClick={handleAdd}
    >
      Add to cart
    </Button>
  );
};
