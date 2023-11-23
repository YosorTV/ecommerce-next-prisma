import { CartState } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { cartSlice } from '@/store/cart';

export const useCart = create<CartState>()(
  persist(cartSlice, { name: 'client-cart' })
);
