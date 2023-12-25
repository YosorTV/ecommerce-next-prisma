'use client';

import { FC, useState } from 'react';

import { useCart } from '@/store';
import { AddCartProps } from '@/types';

import { Button } from '@/components/elements';

export const AddCart: FC<AddCartProps> = ({ data }) => {
  const { onAdd } = useCart();

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(data);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };

  return (
    <Button
      onClick={handleAdd}
      variant='basic'
      className='btn my-3 w-full rounded-none font-medium text-white md:w-min'
      disabled={added}
    >
      Add to cart
    </Button>
  );
};
