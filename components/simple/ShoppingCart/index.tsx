'use client';

import { useMemo } from 'react';

import { Button } from '@/components';
import { useCart } from '@/store';

import { CartItem } from '../CartItem';

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
      <CartItem
        data={item}
        key={item.id}
        onAdd={() => onAdd(item)}
        onRemove={() => onRemove(item)}
      />
    ));
  }, [cart, onAdd, onRemove]);

  const printCartCta = useMemo(() => {
    if (!cart.length)
      return (
        <div className='relative flex h-[80vh] w-full flex-col items-center justify-center'>
          <h2 className='absolute top-[30vh]'>Oops it`s empty ☹️</h2>
          <EmptyBasketIcon width={246} height={246} />
        </div>
      );
    return (
      <div className='flex flex-col gap-2.5'>
        <p>Total: {totalPrice}</p>
        <Button className='my-6 rounded-full border-none bg-teal-700 px-6 py-2 font-medium text-white hover:bg-teal-800'>
          Checkout
        </Button>
      </div>
    );
  }, [cart.length, totalPrice]);

  return (
    isOpen && (
      <div
        onClick={handleToggle}
        className='fixed left-0 top-0 z-20 h-screen w-full bg-black/25'
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='absolute right-0 top-0 z-30 h-screen w-[420px] overflow-y-auto bg-white p-8'
        >
          <h1 className='text-md'>Here`s your shopping list</h1>
          {printCartItems}
          {printCartCta}
        </div>
      </div>
    )
  );
};
