import { postData } from '@/lib/fetch';

export const signIn = async ({ data }: any) => {
  const response = await postData(
    'http://localhost:3000/api/auth/sign-in',
    data
  );

  return response;
};
