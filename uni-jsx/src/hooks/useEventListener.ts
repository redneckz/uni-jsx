import { useEffect } from './core';

export function useEventListener<
  E extends EventTarget,
  M extends GlobalEventHandlersEventMap,
  K extends keyof M = keyof M
>(
  target: E | null | undefined,
  type: K,
  listener: ((this: E, ev: M[K]) => any) | null | undefined,
  options?: boolean | AddEventListenerOptions
): void {
  useEffect(() => {
    if (!target || !listener) {
      return;
    }

    target.addEventListener(type as string, listener as any, options);
    return () => {
      target.removeEventListener(type as string, listener as any, options);
    };
  }, [target, type, listener]);
}
