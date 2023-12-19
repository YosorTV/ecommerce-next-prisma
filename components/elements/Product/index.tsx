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
    <Image
      key={idx}
      src={img}
      alt={name}
      width={800}
      height={800}
      priority
      className='h-[45vh] w-full border-2 border-gray-950 object-cover'
    />
  ));

  return (
    <div key={id} className='text-gray-700'>
      {printImages}
      <div className='py-2.5 font-medium'>
        <h1>{name}</h1>
        <h2 className='text-sm text-green-700'>
          {unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}
        </h2>
      </div>
    </div>
  );
};
