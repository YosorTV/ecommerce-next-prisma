import { postData } from '@/lib/fetch';

export const login = async ({ data }: any) => {
  const response = await postData('http://localhost:3000/api/auth/login', data);

  return response;
};
