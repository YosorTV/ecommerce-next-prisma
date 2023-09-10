import { postData } from '@/lib/fetch';

export const signUp = async ({ data }: any) => {
  const result = await postData('api/auth/sign-up', data);

  return result;
};
