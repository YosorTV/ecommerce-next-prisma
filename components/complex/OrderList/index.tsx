import { cn } from '@/lib';

import { abril } from '@/assets/fonts';
import { Order } from '@/components/elements';

export const OrderList = ({ data }: { data: any }) => {
  const printOrder = (order: any, index: number) => {
    return (
      <div
        className='card relative max-w-[420px] bg-neutral text-base-100'
        key={order.id}
      >
        <span
          className={cn(
            'absolute -left-10 -top-0 text-2xl font-bold text-base-200 underline',
            abril.className
          )}
        >
          0{index + 1}.
        </span>
        <Order {...order} />
      </div>
    );
  };

  return data.map(printOrder);
};
