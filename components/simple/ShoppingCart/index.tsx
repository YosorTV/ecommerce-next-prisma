'use client';

import { Hydrate } from '@/components';
import { useCart } from '@/store';
import { AnimatePresence, motion } from 'framer-motion';

import { CartList } from '../CartList';

import { animCart } from '@/assets/animations';
import { Checkout } from '@/components/complex/Checkout';

export const ShoppingCart = () => {
  const cartStore = useCart();

  const contentZone = {
    cart: <CartList />,
    checkout: <Checkout />,
  };

  return (
    <Hydrate>
      <AnimatePresence>
        {cartStore.isOpen && (
          <motion.div
            initial={animCart.fade.initial}
            animate={animCart.fade.animate}
            exit={animCart.fade.exit}
            onClick={() => cartStore.onToggle()}
            className='fixed left-0 top-0 z-20 h-screen w-full bg-black/25'
          >
            <motion.div
              layout
              onClick={(e) => e.stopPropagation()}
              className='absolute right-0 top-0 z-30 h-screen w-full overflow-y-auto bg-white p-8 md:w-[420px]'
            >
              <div className='flex w-full justify-between'>
                {contentZone[cartStore.key]}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Hydrate>
  );
};
