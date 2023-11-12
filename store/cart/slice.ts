import { CartState } from '@/types';
import { StateCreator } from 'zustand';

export const cartSlice: StateCreator<CartState> = (set, get) => ({
  cart: {
    isOpen: false,
    data: [],
  },
});
