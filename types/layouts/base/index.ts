import { ReactNode } from 'react';

export interface BaseLayoutProps {
  children: ReactNode;
  page: string;
  navigation: any[];
}
