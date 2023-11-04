import { FC } from 'react';

import Image from 'next/image';

import { ProductProps } from '@/types/components';

export const Product: FC<ProductProps> = ({ id, name, price, images = [] }) => {
  const printImages = images.map((img, idx) => (
    <Image
      key={idx}
      src={img}
      alt={name}
      width={800}
      height={800}
      priority
      className='h-96 w-max rounded-lg object-cover lg:w-96'
    />
  ));

  return (
    <div key={id} className='text-gray-700'>
      {printImages}
      <div className='py-2.5 font-medium'>
        <h1>{name}</h1>
        <h2 className='text-sm text-green-700'>
          {price !== null ? price : 'N/A'}
        </h2>
      </div>
    </div>
  );
};
