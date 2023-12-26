import { postData } from '@/lib/fetch';

export const updatePassword = async ({ data }: any) => {
  const response = await postData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/update-password`,
    data
  );

  return response;
};
