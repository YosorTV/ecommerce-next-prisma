import { getData } from '@/lib/fetch';

export const getProducts = async () => {
  const response = await getData('http://localhost:3000/api/products/nike');

  return response;
};
