import { postData } from '@/lib/fetch';

export const getIntentId = async (data: any) => {
  const response = await postData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/create-payment-intent`,
    data
  );

  return response;
};
