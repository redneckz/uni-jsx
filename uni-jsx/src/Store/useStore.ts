import { useEffect, useMemo, useRef } from '../hooks/core';
import { useRerender } from '../hooks/useRerender';
import type { ReadableStore } from './ReadableStore';
import type { WritableStore } from './WritableStore';

const DEFAULT_METHODS = {};

/**
 * MobX like reactivity (simplified).
 * Can be used to migrate from Redux/MobX or something else
 *
 * @param store
 * @returns reactive proxy backed by store
 */
export function useStore<R extends Record<string, any>, M extends Record<string, (this: R, ...args: any[]) => any>>(
  store: ReadableStore<R> & WritableStore<R>,
  methods: M = DEFAULT_METHODS as M
): { [K in keyof R]: R[K] | null } {
  const deps = useRef<Set<string> | null>(null);
  const render = useRerender();

  useEffect(
    () =>
      store.bus.watch(ev => {
        if (deps.current?.has(String(ev.type))) {
          render();
        }
      }),
    [store, render]
  );

  return useMemo(
    () =>
      new Proxy(methods as R & M, {
        get(_, key: string) {
          deps.current ||= new Set();
          deps.current.add(key);

          return store.getItem(key);
        },
        has(_, key: string) {
          deps.current ||= new Set();
          deps.current.add(key);

          return store.hasItem(key);
        },
        set(_, key: string, value) {
          store.setItem(key, value as R[keyof R]);

          return true;
        },
        deleteProperty(_, key: string) {
          store.removeItem(key);

          return true;
        }
      }),
    [store]
  );
}
