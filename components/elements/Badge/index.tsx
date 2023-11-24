'use client';

import { FC } from 'react';

import { BadgeProps } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';

import { animCounter } from '@/assets/animations';

export const Badge: FC<BadgeProps> = ({ counter }) => {
  return (
    <AnimatePresence>
      <motion.span
        initial={animCounter.initial}
        animate={animCounter.animate}
        className='absolute bottom-4 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white'
      >
        {counter}
      </motion.span>
    </AnimatePresence>
  );
};
