import { FC } from 'react';

import Image from 'next/image';

import { formatPrice } from '@/helpers/formatters';
import { ProductProps } from '@/types/components';

export const Product: FC<ProductProps> = ({
  id,
  name,
  unit_amount,
  images = [],
}) => {
  const printImages = images.map((img, idx) => (
    <div className='shadow-image rounded-sm p-2.5 md:p-5'>
      <Image
        key={idx}
        src={img}
        alt={name}
        width={800}
        height={800}
        priority
        className='h-[45vh] w-full rounded-sm object-cover'
      />
    </div>
  ));

  return (
    <div key={id} className='text-base-200'>
      {printImages}
      <div className='py-2.5 font-medium'>
        <h1>{name}</h1>
        <h2 className='text-sm text-primary'>
          {unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}
        </h2>
      </div>
    </div>
  );
};
