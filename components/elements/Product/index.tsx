import { FC } from 'react';

import Image from 'next/image';

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
      className='h-[40vh] w-full rounded-lg object-cover'
    />
  ));

  return (
    <div key={id} className='text-gray-700'>
      {printImages}
      <div className='py-2.5 font-medium'>
        <h1>{name}</h1>
        <h2 className='text-sm text-green-700'>
          {unit_amount !== null ? unit_amount : 'N/A'}
        </h2>
      </div>
    </div>
  );
};
