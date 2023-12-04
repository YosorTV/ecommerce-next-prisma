import { PRICE_LOCALE } from '@/helpers/constants';

export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat('en-US', PRICE_LOCALE.USD).format(amount / 100);
};

export const formatTotalAmount = (data: any[]) => {
  if (!data) return null;

  const totalPrice = data.reduce((prev, item) => {
    return prev + item.quantity * item.unit_amount;
  }, 0);

  return { totalPrice };
};
