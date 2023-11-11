import { ProductDetails } from '@/components';

import { ProductPageProps } from '@/types/app';

export default async function Product({ searchParams }: ProductPageProps) {
  return <ProductDetails data={searchParams} />;
}
