'use client';

import { useCart } from '@/store';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Lottie } from '../Lottie';

import { Button } from '@/components/elements';
// eslint-disable-next-line import/extensions
import lottieAnim from '@/public/LottieSuccess.json';

export const Success = () => {
  const cartStore = useCart();

  const handleBack = () => cartStore.onReset();

  const MotionLink = motion(Link);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className='relative flex w-full flex-col'
    >
      <div className='flex flex-col items-center gap-y-2.5'>
        <div className='inline-flex items-center justify-start gap-x-2.5'>
          <Lottie
            src={lottieAnim}
            text='Your order has been placed 🚀'
            className='mt-0'
          />
        </div>
        <motion.p
          className='text-sm text-base-200'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Check your email for the reciept.
        </motion.p>
      </div>

      <MotionLink
        href='/dashboard'
        className='mx-auto mt-5'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button variant='basic' onClick={handleBack}>
          Check your order
        </Button>
      </MotionLink>
    </motion.div>
  );
};
