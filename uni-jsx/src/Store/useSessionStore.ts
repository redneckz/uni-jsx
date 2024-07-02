import type { ReadableStore } from './ReadableStore';
import { replicate } from './replicate';
import { StorageAdapter } from './StorageAdapter';
import { Store } from './Store';
import { useStore } from './useStore';
import type { WritableStore } from './WritableStore';

const sessionStore = new Store(); // sessionStorage cache
replicate(sessionStore, new StorageAdapter(globalThis?.sessionStorage));

export function useSessionStore<Slice extends Record<string, any>>() {
  return useStore(sessionStore as ReadableStore<Slice> & WritableStore<Slice>);
}
