'use client';

import { FC } from 'react';

import { useCart } from '@/store';
import { AddCartProps } from '@/types';

import { Button } from '@/components/elements';

export const AddCart: FC<AddCartProps> = ({ data }) => {
  const cartStore = useCart();

  // const [added, setAdded] = useState(false);
  // setTimeout(() => {
  //   setAdded(false);
  // }, 500);

  const handleAdd = () => cartStore.onAdd(data);

  return (
    <Button
      onClick={handleAdd}
      variant='basic'
      className='btn my-3 w-full rounded-none font-medium text-white md:w-min'
    >
      Add to cart
    </Button>
  );
};
