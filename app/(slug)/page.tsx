import { LoopedText, ProductsList } from '@/components';

import { getProducts } from '@/services/products';

export default async function RootPage() {
  const { data } = await getProducts();

  return (
    <div className='relative flex flex-col gap-y-5'>
      <div className='absolute -left-10 flex items-center justify-center gap-x-5'>
        <LoopedText />
      </div>
      <section className='mt-40 grid grow grid-cols-fluid gap-5'>
        <ProductsList data={data} />
      </section>
    </div>
  );
}
