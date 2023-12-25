'use client';

import { FC, ReactNode, useEffect } from 'react';

import { useTheme } from '@/store';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Session } from 'next-auth';

interface ILayoutProps {
  children: ReactNode;
  session: Session;
}

export const PageTransition: FC<ILayoutProps> = ({ children, session }) => {
  const router = useRouter();
  const path = usePathname();
  const themeStore = useTheme();

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', themeStore.theme);
  }, [themeStore.theme]);

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
        className='flex h-full w-full flex-col'
      >
        <motion.div
          className='flex-1 flex-grow py-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
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
            ease: 'linear',
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
            ease: 'linear',
          }}
        />
      </motion.main>
    </AnimatePresence>
  );
};
