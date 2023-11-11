import { formatPrice } from '@/helpers';
import { ProductResponse, ProductsResponse } from '@/types';

import { stripeApi } from '@/lib/stripe';

export const productAdapter = async (product: ProductResponse) => {
  if (!product) return null;

  const { stripe } = stripeApi();

  const prices = await stripe.prices.list({ product: product.id });
  const features = product.metadata.features || '';

  return {
    id: product.id,
    name: product.name,
    images: product.images,
    description: product.description,
    unit_amount: formatPrice(prices.data[0].unit_amount),
    currency: prices.data[0].currency,
    metadata: { features },
  };
};

export const productsAdapter = async ({ data }: ProductsResponse) => {
  if (!data) return [];

  const products = await Promise.all(data.map(productAdapter));

  return products;
};
