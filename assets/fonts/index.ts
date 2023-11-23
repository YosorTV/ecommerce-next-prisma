import { Lobster_Two, Roboto } from 'next/font/google';

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
