'use client';

import { FC } from 'react';

import { cn } from '@/lib';
import { useCart, useTheme } from '@/store';
import { CartItemType } from '@/types';
import { motion } from 'framer-motion';

import { CartItem } from '../CartItem';

import { animCart } from '@/assets/animations';
import { abril } from '@/assets/fonts';
import { Lottie } from '@/components/complex';
import { Button, Title } from '@/components/elements';
import { formatPrice, formatTotalAmount } from '@/helpers/formatters';
// eslint-disable-next-line import/extensions
import lottieAnim from '@/public/LottieEmpty.json';

export const CartList: FC = () => {
  const cartStore = useCart();
  const themeStore = useTheme();

  const handleBack = () => cartStore.onToggle();

  if (!cartStore.cart.length)
    return (
      <motion.div
        initial={animCart.basket.initial}
        animate={animCart.basket.animate}
        exit={animCart.basket.exit}
        className='relative flex h-[80vh] w-full flex-col items-center justify-center'
      >
        <Button
          variant='text'
          onClick={handleBack}
          className='absolute -left-5 -top-5 text-lg'
        >
          Return to shopping
        </Button>

        <Lottie
          text='Oops it`s empty ☹️'
          src={lottieAnim}
          playerClassName={themeStore.theme === 'sunset' && 'invert'}
        />
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
    <div className='relative flex w-full flex-col'>
      <Button
        variant='text'
        onClick={handleBack}
        className='absolute -left-5 -top-5 text-lg'
      >
        Return to shopping
      </Button>

      <div className='mt-5 flex flex-col'>
        <Title
          level='3'
          className={cn(
            'w-full text-center text-2xl font-light underline',
            abril.className
          )}
        >
          Here is your shopping list
        </Title>
        {cartStore.cart.map(printCartItem)}
      </div>
      <motion.div layout className='flex flex-col gap-2.5'>
        <p>Total: {formatPrice(totalPrice)}</p>
        <Button
          onClick={() => cartStore.setForm('checkout')}
          className='my-6 border-none px-6 py-2 font-medium text-white'
        >
          Checkout
        </Button>
      </motion.div>
    </div>
  );
};
