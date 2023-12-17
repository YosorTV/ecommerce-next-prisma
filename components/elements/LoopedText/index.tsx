'use client';

import { cn } from '@/lib';
import { AnimatePresence, motion } from 'framer-motion';

import { imbue } from '@/assets/fonts';

export const LoopedText = () => {
  const words = ['DROPSOR', 'DROPSOR', 'DROPSOR', 'DROPSOR', 'DROPSOR'];

  return (
    <AnimatePresence>
      <div
        className={cn(
          'overflow-hidden whitespace-nowrap text-9xl',
          imbue.className
        )}
      >
        {words.map((text, index) => (
          <motion.div
            key={index}
            style={{ display: 'inline-block', paddingRight: '20px' }}
            animate={{ translateX: '-100%' }}
            initial={{ translateX: '0%' }}
            exit={{ translateX: '0%' }}
            transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};
