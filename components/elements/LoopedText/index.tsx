'use client';

import { cn } from '@/lib';
import { AnimatePresence, motion } from 'framer-motion';

import { imbue } from '@/assets/fonts';

export const LoopedText = ({
  repeat,
  text,
}: {
  repeat: number;
  text: string;
}) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        layout='position'
        className={cn(
          'overflow-hidden whitespace-nowrap text-9xl',
          imbue.className
        )}
      >
        {Array.from({ length: repeat }).map((_, index) => (
          <motion.span
            key={index}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-100%' }}
            exit={{ translateX: 0 }}
            className='z-50 inline-flex px-5 uppercase'
            transition={{
              duration: 3,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
