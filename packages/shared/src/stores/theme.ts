import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  mode: 'Light' | 'Dark';
  switch: () => void;
  set: (value: ThemeStore['mode']) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: 'Light',
      switch: () => set(state => ({ mode: state.mode === 'Light' ? 'Dark' : 'Light' })),
      set: mode => set(() => ({ mode }))
    }),
    { name: 'count-store' }
  )
);
