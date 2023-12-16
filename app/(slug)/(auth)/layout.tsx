import { PageLayout } from '@/components';
import { BaseLayoutProps } from '@/types';

export const metadata = {
  title: {
    default: 'Auth',
  },
};

export default async function Layout({ children }: BaseLayoutProps) {
  return (
    <PageLayout className='flex h-[80vh] items-center justify-center'>
      {children}
    </PageLayout>
  );
}
