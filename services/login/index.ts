import { postData } from '@/lib/fetch';

export const login = async ({ data }: any) => {
  const response = await postData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
    data
  );

  return response;
};
