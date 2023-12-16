'use client';

import { FC, ReactNode, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Session } from 'next-auth';

import { pageVariant } from '@/assets/animations';

interface ILayoutProps {
  children: ReactNode;
  session: Session;
}

export const PageTransition: FC<ILayoutProps> = ({ children, session }) => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    return () => {
      if (session) return;
      router.refresh();
    };
  }, [path, session]);

  return (
    <AnimatePresence mode='wait'>
      <motion.main
        key={path}
        layout='position'
        className='container relative top-16 flex min-h-[87vh] flex-col'
      >
        <motion.div
          initial='start'
          animate='animate'
          exit='end'
          variants={pageVariant}
          transition={{
            duration: 0.7,
            type: 'tween',
            ease: 'easeInOut',
          }}
          className='flex-1 flex-grow'
        >
          {children}
        </motion.div>

        <motion.div
          className='slide-in'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.5,
            type: 'tween',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='slide-out'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 0.5,
            type: 'tween',
            ease: 'easeInOut',
          }}
        />
      </motion.main>
    </AnimatePresence>
  );
};
