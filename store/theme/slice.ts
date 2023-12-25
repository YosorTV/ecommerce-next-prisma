import { ThemeState } from '@/types';
import { StateCreator } from 'zustand';

export const themeSlice: StateCreator<ThemeState> = (set) => ({
  theme: 'light',
  setTheme: (value) => set(() => ({ theme: value })),
});
