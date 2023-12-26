import { getData } from '@/lib/fetch';

export const getOrderList = async ({ userId }: { userId: string }) => {
  const response = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/orders?id=${userId}`
  );

  return response;
};
