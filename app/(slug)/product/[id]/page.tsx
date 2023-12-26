import { ProductDetails } from '@/components';

import { ProductPageProps } from '@/types/app';

export default async function Product({
  params,
  searchParams,
}: ProductPageProps) {
  return <ProductDetails data={searchParams} id={params.id} />;
}
