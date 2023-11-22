import { CartState } from '@/types';
import { StateCreator } from 'zustand';

export const cartSlice: StateCreator<CartState> = (set) => ({
  cart: [],
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onAdd: (item) =>
    set((state) => {
      const existedItem = state.cart.find(({ id }) => item.id === id);
      if (existedItem) {
        const updatedCart = state.cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        return { cart: updatedCart };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
});
