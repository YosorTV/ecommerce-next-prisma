import { postData } from '@/lib/fetch';

export const resetPassword = async ({ data }: any) => {
  const response = await postData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
    data
  );

  return response;
};
