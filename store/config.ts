import { StoreProps } from '@/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { cartSlice } from './cart/slice';

const storage = { name: 'client-state' };

export const useStore = create<StoreProps>()(
  persist(
    devtools((...a) => ({
      ...cartSlice(...a),
    })),
    storage
  )
);
