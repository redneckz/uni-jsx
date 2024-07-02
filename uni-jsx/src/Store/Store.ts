import { EventBus } from '../EventBus/EventBus';
import type { ReadableStore } from './ReadableStore';
import type { WritableStore } from './WritableStore';

export class Store<R extends Record<string, any>> implements ReadableStore<R>, WritableStore<R> {
  private readonly store = new Map<keyof R, R[keyof R]>();

  get size(): number {
    return this.store.size;
  }

  constructor(public readonly bus = new EventBus<R>()) {}

  hasItem<K extends keyof R>(key: K): boolean {
    return this.store.has(key);
  }

  getItem<K extends keyof R>(key: K): R[K] | null {
    return this.store.get(key) as R[K];
  }

  entries() {
    return this.store.entries();
  }

  setItem<K extends keyof R>(key: K, value: R[K]): void {
    this.store.set(key, value);
    this.bus.subject(key, value);
  }

  removeItem<K extends keyof R>(key: K): void {
    this.store.delete(key);
    this.bus.subject(key, null as R[K]);
  }
}
