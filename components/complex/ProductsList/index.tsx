import { FC } from 'react';

import Link from 'next/link';

import { Product } from '@/components/elements';
import { ProductListProps } from '@/types/components';

export const ProductsList: FC<ProductListProps> = ({ data }) => {
  if (!data.length) return <p>Empty list</p>;

  const printProducts = data.map((product) => (
    <Link
      href={{
        pathname: `product/${product.id}`,
        query: { ...product },
      }}
    >
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        images={product.images}
        unit_amount={product.unit_amount}
        currency={product.currency}
      />
    </Link>
  ));

  return <>{printProducts}</>;
};
