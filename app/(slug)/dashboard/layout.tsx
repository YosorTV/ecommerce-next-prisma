import { PageLayout } from '@/components';
import { BaseLayoutProps } from '@/types';

export const metadata = {
  title: {
    default: 'Product Details',
  },
};

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <PageLayout className='container flex w-full justify-center pb-10'>
      {children}
    </PageLayout>
  );
}
