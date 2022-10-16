import { areDepsEqual } from './areDepsEqual';
import { getCurrentHook } from './getCurrentHook';

interface MemoState<R, Deps extends any[]> {
  result: R;
  deps?: Deps;
}

export function useMemo<R, Deps extends any[]>(computed: () => R, deps: Deps): R {
  const [hook] = getCurrentHook<MemoState<R, Deps>>();

  if (hook.state && areDepsEqual(deps, hook.state.deps)) {
    return hook.state.result;
  }

  hook.state = { deps, result: computed() };

  return hook.state.result;
}
