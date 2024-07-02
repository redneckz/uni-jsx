import { EventBus } from '../EventBus/EventBus';
import type { ReadableStore } from './ReadableStore';
import type { WritableStore } from './WritableStore';

export class StorageAdapter<R extends Record<string, any>> implements ReadableStore<R>, WritableStore<R> {
  get size(): number {
    return this.storage?.length ?? 0;
  }

  constructor(private readonly storage: Storage | null | undefined, public readonly bus = new EventBus<R>()) {}

  hasItem<K extends keyof R>(key: K): boolean {
    return Boolean(this.storage?.getItem(String(key)));
  }

  getItem<K extends keyof R>(key: K): R[K] | null {
    const _ = this.storage?.getItem(String(key)) ?? null;

    try {
      return JSON.parse(String(_));
    } catch (ex) {
      return null;
    }
  }

  entries() {
    return Array.from({ length: this.size }, (_, i) => {
      const k = String(this.storage?.key(i));

      return [k, this.getItem(k)] as [keyof R, R[keyof R]];
    });
  }

  setItem<K extends keyof R>(key: K, value: R[K] | null): void {
    if (value !== null) {
      this.storage?.setItem(String(key), JSON.stringify(value));
    } else {
      this.storage?.removeItem(String(key));
    }
    this.bus?.subject(key, value);
  }

  removeItem<K extends keyof R>(key: K): void {
    this.storage?.removeItem(String(key));
    this.bus?.subject(key, null);
  }
}
