'use client';

import { FC } from 'react';

import { useCart } from '@/store';
import { motion } from 'framer-motion';

import { CartItem } from '../CartItem';

import { animCart } from '@/assets/animations';
import { EmptyBasketIcon } from '@/assets/icons';
import { Button } from '@/components/elements';
import { formatPrice, formatTotalAmount } from '@/helpers/formatters';
import { CartItemType } from '@/types';

export const CartList: FC = () => {
  const cartStore = useCart();

  if (!cartStore.cart.length)
    return (
      <motion.div
        initial={animCart.basket.initial}
        animate={animCart.basket.animate}
        exit={animCart.basket.exit}
        className='relative flex h-[80vh] w-full flex-col items-center justify-center'
      >
        <h2 className='absolute top-[30vh]'>Oops it`s empty ☹️</h2>
        <EmptyBasketIcon width={246} height={246} />
      </motion.div>
    );

  const printCartItem = (item: CartItemType) => {
    return (
      <motion.div
        layout
        key={item.id}
        className='bg-red mt-5 flex gap-2.5 py-2.5'
      >
        <CartItem
          data={item}
          onAdd={() => cartStore.onAdd(item)}
          onRemove={() => cartStore.onRemove(item)}
        />
      </motion.div>
    );
  };

  const { totalPrice } = formatTotalAmount(cartStore.cart);

  return (
    <div>
      <h1 className='text-md'>Here`s your shopping list</h1>

      {cartStore.cart.map(printCartItem)}
      <motion.div layout className='flex flex-col gap-2.5'>
        <p>Total: {formatPrice(totalPrice)}</p>
        <Button
          onClick={() => cartStore.setForm('checkout')}
          className='my-6 rounded-full border-none bg-teal-700 px-6 py-2 font-medium text-white hover:bg-teal-800'
        >
          Checkout
        </Button>
      </motion.div>
    </div>
  );
};
