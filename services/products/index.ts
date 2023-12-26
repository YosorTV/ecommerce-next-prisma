import { getData } from '@/lib/fetch';

export const getProducts = async () => {
  const response = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/nike`
  );

  return response;
};
