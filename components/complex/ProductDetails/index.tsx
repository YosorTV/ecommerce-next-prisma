import { FC } from 'react';

import { ProductDetailsProps } from '@/types';
import Image from 'next/image';

import { Button } from '@/components/elements';

export const ProductDetails: FC<ProductDetailsProps> = ({ data }) => {
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
        <Button className='my-12 rounded-md border-none bg-teal-700 px-6 py-2 font-medium text-white hover:bg-teal-800'>
          Add to cart
        </Button>
      </div>
    </article>
  );
};
