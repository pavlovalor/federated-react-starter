import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

interface LogItem {
  timestamp: number;
  previewUrl: string,
  title: string;
  author: string;
  rating: number;
}

interface MemeHistoryStore {
  records: Record<ReturnType<typeof nanoid>, LogItem>;
  add(input: Omit<LogItem, 'timestamp'>): void;
  forget(id: ReturnType<typeof nanoid>): void;
};

export const useMemeHistoryStore = create<MemeHistoryStore>()(
  persist(
    set => ({
      records: {},

      add: input => set(state => ({ records: {...state.records, [nanoid(16)]: {
        timestamp: Date.now(),
        ...input,
      }}})),

      forget: id => set(state => ({
        records: Object.entries(state.records).reduce<MemeHistoryStore['records']>((acc, [key, value]) => {
          if (key !== id) acc[key] = value;
          return acc;
        }, {})
      })),
    }),
    { name: 'count-store' }
  )
);
