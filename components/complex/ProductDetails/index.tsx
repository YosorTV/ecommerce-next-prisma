import { FC } from 'react';

import { AddCart } from '@/components';
import { ProductDetailsProps } from '@/types';
import Image from 'next/image';

export const ProductDetails: FC<ProductDetailsProps> = ({ data }) => {
  const cartData = {
    id: data.id,
    image: data.images,
    name: data.name,
    unit_amount: data.unit_amount,
  };

  return (
    <article className='flex w-full justify-between'>
      <Image
        src={data.images}
        alt={data.name}
        width={1200}
        height={1200}
        priority
        className='h-[70vh] w-full object-cover'
      />
      <div className='flex-0 mx-5 flex flex-col'>
        <div className='font-medium text-gray-700'>
          <h1 className='py-2 text-2xl'>{data.name}</h1>
          <p className='py-2'>{data.description}</p>
        </div>
        <div className='flex gap-2'>
          <p className='font-bold text-teal-700'>{data.unit_amount}</p>
        </div>
        <AddCart data={cartData} />
      </div>
    </article>
  );
};
