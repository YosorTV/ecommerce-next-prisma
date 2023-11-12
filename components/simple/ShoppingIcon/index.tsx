'use client';

import { FC } from 'react';

import { cartSelector, useStore } from '@/store';
import { AiFillShopping } from 'react-icons/ai';

import { Badge, Icon } from '@/components/elements';

export const ShoppingIcon: FC = () => {
  const { data } = useStore(cartSelector);

  return (
    <Icon className='relative flex cursor-pointer items-center text-3xl'>
      {data.length > 0 && <Badge counter={data.length} />}
      <AiFillShopping />
    </Icon>
  );
};
