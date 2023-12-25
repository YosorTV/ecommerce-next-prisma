import { getData } from '@/lib/fetch';

export const getOrderList = async ({ userId }: { userId: string }) => {
  const response = await getData(
    `http://localhost:3000/api/orders?id=${userId}`
  );

  return response;
};
