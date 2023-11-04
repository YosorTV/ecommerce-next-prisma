import { PRICE_LOCALE } from '@/helpers';

export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat('en-US', PRICE_LOCALE.USD).format(amount / 100);
};
