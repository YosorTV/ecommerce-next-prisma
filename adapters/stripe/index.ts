import { CustomerAdapter, CustomerData } from './types';

export const createCustomerAdapter = ({
  data,
}: CustomerData): CustomerAdapter => {
  if (!data) return null;

  const { email, name } = data;

  return {
    email,
    name,
  };
};
