import { cn } from '@/lib';
import Image from 'next/image';

import { Title } from '../Title';

import { lobster } from '@/assets/fonts';
import { formatDate, formatPrice } from '@/helpers/formatters';

export const Order = (data: any) => {
  const formattedDate = formatDate(data.createdDate);
  const formattedPrice = formatPrice(data.amount);

  const printGoods = (good: any) => {
    return (
      <div key={good.id} className='flex items-center gap-x-2.5'>
        <Image
          src={good.image}
          width={80}
          height={80}
          alt={good.name}
          className='h-20 w-auto'
        />
        <div>
          <p>{good.name}</p>
          <p>Quantity: {good.quantity}</p>
          <p>Price: {formatPrice(good.unit_amount)}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='flex h-full flex-col gap-2.5 rounded-lg p-5'>
      <Title level='2'>Order reference: {data.id}</Title>
      <p>Date: {formattedDate}</p>
      <p>
        Status:{' '}
        <span
          className={cn(
            'rounded-md p-2 text-lg text-white',
            lobster.className,
            data.status === 'completed' ? 'bg-primary' : 'bg-secondary'
          )}
        >
          {data.status}
        </span>
      </p>
      <div className='my-2.5 flex flex-col gap-5'>
        {data?.products?.map(printGoods)}
      </div>
      <p className='mt-auto font-bold'>Total: {formattedPrice}</p>
    </div>
  );
};
