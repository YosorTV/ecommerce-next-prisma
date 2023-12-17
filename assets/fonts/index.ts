import { Imbue, Lobster_Two, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const lobster = Lobster_Two({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-lobster',
});

export const imbue = Imbue({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-imbue',
});
