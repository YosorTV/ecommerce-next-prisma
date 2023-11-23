'use client';

import { FC } from 'react';

import { Button } from '@/components';
import { CartItemProps } from '@/types';
import Image from 'next/image';

import { AddIcon, RemoveIcon } from '@/assets/icons';

export const CartItem: FC<CartItemProps> = ({ data, onAdd, onRemove }) => {
  return (
    <div className='bg-red mt-5 flex gap-2.5 py-2.5'>
      <Image
        src={data.image}
        alt={data.name}
        width={120}
        height={120}
        className='h-20 w-16 rounded-md'
      />
      <div className='flex flex-col'>
        <div>
          <h2 className='text-lg'>{data.name}</h2>
          <div className='flex gap-x-2'>
            <p className='text-md'>Quantity: {data.quantity}</p>
            <div className='flex gap-x-1.5'>
              <Button variant='icon' onClick={onRemove}>
                <AddIcon height={18} width={18} />
              </Button>
              <Button variant='icon' onClick={onAdd}>
                <RemoveIcon height={18} width={18} />
              </Button>
            </div>
          </div>
        </div>
        <span className='pt-2.5 text-sm'>{data.unit_amount}</span>
      </div>
    </div>
  );
};
