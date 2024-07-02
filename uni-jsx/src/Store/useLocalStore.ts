import type { ReadableStore } from './ReadableStore';
import { replicate } from './replicate';
import { StorageAdapter } from './StorageAdapter';
import { Store } from './Store';
import { useStore } from './useStore';
import type { WritableStore } from './WritableStore';

const localStore = new Store(); // localStorage cache
replicate(localStore, new StorageAdapter(globalThis?.localStorage));

export function useLocalStore<
  Slice extends Record<string, any>,
  M extends Record<string, (this: Slice, ...args: any[]) => any> = Record<never, any>
>(methods?: M) {
  return useStore(localStore as ReadableStore<Slice> & WritableStore<Slice>, methods);
}
