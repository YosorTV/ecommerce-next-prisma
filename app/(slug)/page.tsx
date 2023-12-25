import { LoopedText, ProductsList, Title } from '@/components';
import { cn } from '@/lib';

import { abril } from '@/assets/fonts';
import { getProducts } from '@/services/products';

export default async function RootPage() {
  const { data } = await getProducts();

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center gap-x-5 overflow-hidden'>
        <LoopedText text='dropsor' repeat={16} />
      </div>

      <div className='container pt-5 text-center'>
        <Title
          level='1'
          className={cn('serif text-4xl font-bold underline', abril.className)}
        >
          New arrivals
        </Title>
        <section className='mt-10 grid grow grid-cols-fluid gap-5 md:gap-10 xl:gap-20'>
          <ProductsList data={data} />
        </section>
      </div>
    </div>
  );
}
