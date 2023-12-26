import { Abril_Fatface, Imbue, Lobster_Two, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  adjustFontFallback: false,
});

export const lobster = Lobster_Two({
  weight: ['700', '400'],
  subsets: ['latin'],
  variable: '--font-lobster',
  display: 'swap',
  adjustFontFallback: false,
});

export const imbue = Imbue({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-imbue',
  display: 'swap',
  adjustFontFallback: false,
});

export const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abril',
  display: 'swap',
  adjustFontFallback: false,
});
