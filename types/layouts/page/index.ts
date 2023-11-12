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

export interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  page: string;
}

export interface HeaderProps {
  navigation?: Navigation[];
  user?: any;
}

export interface FooterProps {
  page?: string;
}

export type PageProps = {
  searchParams: any;
  params: any;
};
