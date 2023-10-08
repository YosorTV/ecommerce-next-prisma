import { ReactNode } from 'react';

interface Navigation {
  id: number | string;
  href: string;
  text: string;
  className?: string;
}

export interface PageLayoutProps {
  children: ReactNode;
  page?: string;
  navigation?: Navigation[];
  user?: any;
}

export interface HeaderProps {
  navigation?: Navigation[];
  user?: any;
}

export interface FooterProps {
  page?: string;
}
