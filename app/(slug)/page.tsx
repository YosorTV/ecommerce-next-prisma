import { ProductsList } from '@/components';

import { getProducts } from '@/services/products';

export default async function RootPage() {
  const { data } = await getProducts();

  return (
    <section className='grid grow grid-cols-fluid gap-5'>
      <ProductsList data={data} />
    </section>
  );
}
