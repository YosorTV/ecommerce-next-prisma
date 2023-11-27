'use client';

import { FC } from 'react';

import { useCart } from '@/store';
import { AddCartProps } from '@/types';

import { Button } from '@/components/elements';

export const AddCart: FC<AddCartProps> = ({ data }) => {
  const { onAdd } = useCart();

  const handleAdd = () => onAdd(data);

  return (
    <Button
      onClick={handleAdd}
      className='my-3 w-full border-none bg-teal-700 px-6 py-2 font-medium text-white hover:bg-teal-800 md:w-min'
    >
      Add to cart
    </Button>
  );
};
