'use client';

import { FC } from 'react';

import { PageTransitionProps } from '@/types';
import { motion } from 'framer-motion';

export const PageTransition: FC<PageTransitionProps> = ({
  children,
  className,
  page,
}) => {
  const transition = {
    duration: 0.5,
    ease: 'easeInOut',
  };

  return (
    <motion.div
      key={page}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
