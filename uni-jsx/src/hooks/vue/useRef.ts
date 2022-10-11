import { getCurrentHook } from './getCurrentHook';

interface RefState<T> {
  current: T | null;
}

export function useRef<T>(initialValue: T): { current: T | null } {
  const [hook] = getCurrentHook<RefState<T>>();

  if (!hook.state) {
    hook.state = { current: initialValue || null };
  }

  return hook.state;
}
