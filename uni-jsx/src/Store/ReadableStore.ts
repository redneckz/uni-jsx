import type { EventBusHolder } from '../EventBus/EventBusObservable';

export interface ReadableStore<R extends Record<string, any>> extends EventBusHolder<R> {
  readonly size: number;

  hasItem<K extends keyof R>(key: K): boolean;

  getItem<K extends keyof R>(key: K): R[K] | null;

  entries(): Iterable<[keyof R, R[keyof R]]>;
}
