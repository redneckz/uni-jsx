import { useEffect } from './core';

export function useDebouncedEffect<Deps extends any[]>(effect: () => void | (() => void), deps: Deps, delay = 300) {
  useEffect(() => {
    const timerId = globalThis.setTimeout(effect, delay);

    return () => {
      globalThis.clearTimeout(timerId);
    };
  }, deps);
}
