import type { ReadableStore } from './ReadableStore';
import type { WritableStore } from './WritableStore';

export function copy<S extends Record<string, any>, T extends S>(
  source: ReadableStore<S>,
  target: WritableStore<T>
): void {
  for (const [k, v] of source.entries()) {
    if (v !== null && v !== undefined) {
      target.setItem(k, v);
    } else {
      target.removeItem(k);
    }
  }
}
