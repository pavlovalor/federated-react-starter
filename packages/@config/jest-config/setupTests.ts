import { jest } from '@jest/globals';
import {
  useMemeHistoryStore,
  useThemeStore,
} from '@testing/shared';

// explicitly link shared to their actual implementation for tests
jest.mock('shared/store/meme-rating', () => useMemeHistoryStore, { virtual: true });
jest.mock('shared/store/theme', () => useThemeStore, { virtual: true });
