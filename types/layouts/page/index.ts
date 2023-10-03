import { ReactNode } from 'react';

interface Navigation {
  id: number | string;
  href: string;
  text: string;
  className?: string;
}

export interface PageLayoutProps {
  children: ReactNode;
  navigation?: Navigation[];
  user?: any;
}
