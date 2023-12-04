import { postData } from '@/lib/fetch';

export const getIntentId = async (data: any) => {
  const response = await postData(
    'http://localhost:3000/api/create-payment-intent',
    data
  );

  return response;
};
