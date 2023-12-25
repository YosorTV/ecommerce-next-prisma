'use client';

import { FC } from 'react';

import { Button } from '@/components';
import { CartItemProps } from '@/types';
import Image from 'next/image';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

import { formatPrice } from '@/helpers/formatters';

export const CartItem: FC<CartItemProps> = ({ data, onAdd, onRemove }) => {
  return (
    <>
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
                <IoRemoveCircle />
              </Button>
              <Button variant='icon' onClick={onAdd}>
                <IoAddCircle />
              </Button>
            </div>
          </div>
        </div>
        <span className='pt-2.5 text-sm'>{formatPrice(data.unit_amount)}</span>
      </div>
    </>
  );
};
