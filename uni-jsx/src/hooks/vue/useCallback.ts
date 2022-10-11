import { areDepsEqual } from './areDepsEqual';
import { getCurrentHook } from './getCurrentHook';

interface CallbackState<F extends Function, Deps extends any[]> {
  callback: F;
  deps?: Deps;
}

export function useCallback<F extends Function, Deps extends any[]>(callback: F, deps?: Deps): F {
  const [hook] = getCurrentHook<CallbackState<F, Deps>>();

  if (hook.state && areDepsEqual(deps, hook.state.deps)) {
    return hook.state.callback;
  }

  hook.state = { deps, callback };

  return hook.state.callback;
}
