import { formatPrice } from '@/helpers';

import { stripeApi } from '@/lib/stripe';

export const productAdapter = async (product: any) => {
  if (!product) return null;

  const { stripe } = stripeApi();

  const prices = await stripe.prices.list({ product: product.id });

  return {
    id: product.id,
    name: product.name,
    images: product.images,
    description: product.description,
    price: formatPrice(prices.data[0].unit_amount),
    currency: prices.data[0].currency,
  };
};

export const productsAdapter = async ({ data }: any) => {
  if (!data) return [];

  const products = await Promise.all(data.map(productAdapter));

  return products;
};
