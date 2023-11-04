import { FC } from 'react';

import { Product } from '@/components/elements';
import { ProductListProps } from '@/types/components';

export const ProductsList: FC<ProductListProps> = ({ data }) => {
  if (!data.length) return <p>Empty list</p>;

  const printProducts = data.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      name={product.name}
      images={product.images}
      price={product.price}
      currency={product.currency}
    />
  ));

  return <>{printProducts}</>;
};
