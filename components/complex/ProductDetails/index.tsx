import { FC } from 'react';

import { AddCart } from '@/components';
import { ProductDetailsProps } from '@/types';
import Image from 'next/image';

import { formatPrice } from '@/helpers/formatters';

export const ProductDetails: FC<ProductDetailsProps> = ({ data }) => {
  const cartData = {
    id: data.id,
    image: data.images,
    name: data.name,
    unit_amount: Number(data.unit_amount),
  };

  return (
    <article className='mt-5 flex w-full flex-col justify-between md:flex-row'>
      <Image
        src={data.images}
        alt={data.name}
        width={1200}
        height={1200}
        priority
        className='image-details-container shadow-image p-5'
      />
      <div className='flex-0 flex flex-col md:mx-5'>
        <div className='font-medium text-base-200'>
          <h1 className='py-2 text-lg lg:text-2xl'>{data.name}</h1>
          <p className='lg:text-md pb-2 text-base'>{data.description}</p>
        </div>
        <div className='flex gap-2'>
          <p className='font-bold text-primary'>
            {formatPrice(data.unit_amount)}
          </p>
        </div>
        <AddCart data={cartData} />
      </div>
    </article>
  );
};
