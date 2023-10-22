import { postData } from '@/lib/fetch';

export const updatePassword = async ({ data }: any) => {
  const response = await postData(
    'http://localhost:3000/api/auth/update-password',
    data
  );

  return response;
};
