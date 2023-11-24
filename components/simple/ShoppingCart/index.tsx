'use client';

import { useMemo } from 'react';

import { Button } from '@/components';
import { useCart } from '@/store';
import { AnimatePresence, motion } from 'framer-motion';

import { CartItem } from '../CartItem';

import { animCart } from '@/assets/animations';
import { EmptyBasketIcon } from '@/assets/icons';

export const ShoppingCart = () => {
  const { isOpen, cart = [], onToggle, onAdd, onRemove } = useCart();

  const totalPrice = cart.reduce((prev, item) => {
    const convertedAmount = parseFloat(item.unit_amount.replace('$', ''));
    return prev + item.quantity * convertedAmount;
  }, 0);

  const handleToggle = () => onToggle();

  const printCartItems = useMemo(() => {
    return cart?.map((item) => (
      <motion.div
        layout
        key={item.id}
        className='bg-red mt-5 flex gap-2.5 py-2.5'
      >
        <CartItem
          data={item}
          onAdd={() => onAdd(item)}
          onRemove={() => onRemove(item)}
        />
      </motion.div>
    ));
  }, [cart, onAdd, onRemove]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={animCart.fade.initial}
          animate={animCart.fade.animate}
          exit={animCart.fade.exit}
          onClick={handleToggle}
          className='fixed left-0 top-0 z-20 h-screen w-full bg-black/25'
        >
          <motion.div
            layout
            onClick={(e) => e.stopPropagation()}
            className='absolute right-0 top-0 z-30 h-screen w-[420px] overflow-y-auto bg-white p-8'
          >
            <h1 className='text-md'>Here`s your shopping list</h1>
            {printCartItems}
            {!cart.length && (
              <motion.div
                initial={animCart.basket.initial}
                animate={animCart.basket.animate}
                exit={animCart.basket.exit}
                className='relative flex h-[80vh] w-full flex-col items-center justify-center'
              >
                <h2 className='absolute top-[30vh]'>Oops it`s empty ☹️</h2>
                <EmptyBasketIcon width={246} height={246} />
              </motion.div>
            )}
            {cart.length > 0 && (
              <motion.div layout className='flex flex-col gap-2.5'>
                <p>Total: {totalPrice}</p>
                <Button className='my-6 rounded-full border-none bg-teal-700 px-6 py-2 font-medium text-white hover:bg-teal-800'>
                  Checkout
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
