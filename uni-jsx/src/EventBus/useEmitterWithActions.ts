import { useMemo, useRef } from '../hooks/core';
import type { EventBusEmitter } from './EventBusEmitter';

type ActionEmitter<A extends Record<string, any>> = keyof A extends never ? () => void : (action: A) => void;

type ActionEmittersMap<A extends Record<string, any>> = {
  [T in A['type']]: ActionEmitter<Omit<Extract<A, { type: T }>, 'type'>>;
};

export function useEmitterWithActions<EM extends Record<string, any>, K extends keyof EM>(
  eventBus: EventBusEmitter<EM>,
  type: K
): ActionEmittersMap<EM[K]> {
  const cache = useRef<Partial<ActionEmittersMap<EM[K]>>>({});

  return useMemo(
    () =>
      new Proxy({} as ActionEmittersMap<EM[K]>, {
        get(_, actionType) {
          cache.current ||= {};
          cache.current[actionType] ||= action => eventBus.fire(type, { type: actionType, ...(action ?? {}) } as EM[K]);

          return cache.current[actionType];
        }
      }),
    [eventBus, type]
  );
}
