import { useEffect, useState } from '../hooks/core';
import type { EventBusHolder, EventBusObservable } from './EventBusObservable';

export function useObservableState<EM extends Record<string, any>, K extends keyof EM>(
  eventBus: EventBusObservable<EM> | EventBusHolder<EM>,
  type: K,
  initialState: EM[K]
): EM[K] {
  const [state, setState] = useState<EM[K] | null>(initialState);

  useEffect(() => ('bus' in eventBus ? eventBus.bus : eventBus).subscribe(type, setState), [eventBus, type]);

  return state ?? initialState;
}
