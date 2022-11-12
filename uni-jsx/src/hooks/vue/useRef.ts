import { getCurrentHook } from './getCurrentHook';

interface RefState<T> {
  current: T | null;
}

export function useRef<T>(initialValue: T): { current: T | null } {
  const [hook] = getCurrentHook<RefState<T>>();

  if (!hook.state) {
    const state: RefState<T> = (_: T | null) => {
      state.current = _;
    };
    state.current = initialValue || null;
    hook.state = state;
  }

  return hook.state;
}
