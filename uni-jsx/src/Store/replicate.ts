import { copy } from './copy';
import type { ReadableStore } from './ReadableStore';
import type { WritableStore } from './WritableStore';

export function replicate<S extends Record<string, any>>(
  primary: ReadableStore<S> & WritableStore<S>,
  secondary: ReadableStore<S> & WritableStore<S>
) {
  copy(primary, secondary);
  copy(secondary, primary);

  return primary.bus.watch(({ type, event }) => {
    if (event !== null && event !== undefined) {
      secondary.setItem(type, event);
    } else {
      secondary.removeItem(type);
    }
  });
}
