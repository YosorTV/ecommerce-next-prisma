import { OrderList, Title } from '@/components';
import { authOptions, cn } from '@/lib';
import { getServerSession } from 'next-auth';

import { abril } from '@/assets/fonts';
import { getOrderList } from '@/services/orders';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const orders = await getOrderList({ userId: session?.user?.id });

  if (!session?.user) return <p>UNAUTHORIZED</p>;

  return (
    <div className='flex flex-col gap-y-10'>
      <Title
        level='1'
        className={cn('w-full text-center text-3xl underline', abril.className)}
      >
        {orders.message}
      </Title>
      <div className='grid grid-cols-fluid gap-20 md:grid-cols-2'>
        {orders.data.length && <OrderList data={orders.data} />}
      </div>
    </div>
  );
}
