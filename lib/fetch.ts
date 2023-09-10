import { postParams } from '@/helpers/constants';

export const postData = async (path: string, data: any, options?: any) => {
  const response = await fetch(path, postParams({ data, options }));

  const result = await response.json();

  return result;
};
