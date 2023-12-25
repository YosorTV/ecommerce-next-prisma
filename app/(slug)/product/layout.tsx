import { PageLayout } from '@/components';
import { BaseLayoutProps } from '@/types';

export const metadata = {
  title: {
    default: 'Product Details',
  },
};

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <PageLayout className='container flex h-full justify-start'>
      {children}
    </PageLayout>
  );
}
