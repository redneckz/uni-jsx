import { useEffect } from '../hooks/core';
import type { EventBusObservable } from './EventBusObservable';

type ActionHandlersMap<A extends Record<string, any>> = {
  [T in A['type']]: (action: Extract<A, { type: T }>) => void;
};

export function useObservableWithActions<EM extends Record<string, any>, K extends keyof EM>(
  eventBus: EventBusObservable<EM>,
  type: K,
  handlersMap: ActionHandlersMap<EM[K]>
): void {
  useEffect(
    () =>
      eventBus.subscribe(type, action => {
        const actionType = action?.type;
        if (actionType && typeof actionType === 'string') {
          const handler = handlersMap[actionType];
          handler && handler(action);
        }
      }),
    [eventBus, type, ...Object.values(handlersMap)]
  );
}
