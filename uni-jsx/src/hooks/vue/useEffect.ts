// @ts-ignore
import { watchPostEffect } from 'vue';
import { areDepsEqual } from './areDepsEqual.js';
import { getCurrentHook } from './getCurrentHook.js';

export const useEffect = updateEffectImp();
export const useLayoutEffect = updateEffectImp(true);

type Cleanup = () => void;
type Effect = () => Cleanup | void;

interface EffectState<Deps extends any[]> {
  deps?: Deps;
  cleanup: Cleanup | void;
}

function updateEffectImp(isLayout = false) {
  return <Deps extends any[]>(effect: Effect, deps: Deps): void => {
    const [hook] = getCurrentHook<EffectState<Deps>>();

    const task = () => {
      if (hook.state && areDepsEqual(deps, hook.state.deps)) {
        return;
      }

      hook.state?.cleanup && hook.state.cleanup();
      hook.state = { deps, cleanup: effect() };
    };

    if (isLayout) {
      const stop = watchPostEffect(() => {
        queueMicrotask(task);
        stop();
      });
    } else {
      queueMicrotask(task);
    }
  };
}
