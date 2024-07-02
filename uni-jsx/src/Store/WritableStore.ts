export interface WritableStore<R extends Record<string, any>> {
  setItem<K extends keyof R>(key: K, value: R[K]): void;

  removeItem<K extends keyof R>(key: K): void;
}
