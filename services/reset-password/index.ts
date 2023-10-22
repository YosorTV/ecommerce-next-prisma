import { postData } from '@/lib/fetch';

export const resetPassword = async ({ data }: any) => {
  const response = await postData(
    'http://localhost:3000/api/auth/reset-password',
    data
  );

  return response;
};
