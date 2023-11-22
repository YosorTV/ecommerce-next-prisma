import { CartState } from '@/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { cartSlice } from '@/store/cart';

export const useCart = create<CartState>()(
  devtools(persist((...a) => ({ ...cartSlice(...a) }), { name: 'client-cart' }))
);
