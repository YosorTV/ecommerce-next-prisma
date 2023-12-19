'use client';

import { useEffect } from 'react';

import { cn } from '@/lib';
import { useCart } from '@/store';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { abril } from '@/assets/fonts';
import { Button, Title } from '@/components/elements';

export const Success = () => {
  const cartStore = useCart();

  const handleBack = () => cartStore.onReset();

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className='relative flex w-full flex-col'
    >
      <div className='mt-5 flex flex-col items-center gap-y-2.5'>
        <div className='inline-flex items-center justify-center gap-x-2.5'>
          <Title
            level='1'
            className={cn('text-3xl underline', abril.className)}
          >
            Your order has been placed
          </Title>
          <span className='no-underline'>🚀</span>
        </div>
        <p className='text-lg'>Check your email for the reciept.</p>
      </div>

      <Link href='/dashboard' className='mx-auto mt-5'>
        <Button variant='basic' onClick={handleBack}>
          Check your order
        </Button>
      </Link>
    </motion.div>
  );
};
