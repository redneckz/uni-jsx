import { useCallback, useRef } from './core';
import { useEventListener } from './useEventListener';

export function useOutsideClick<R extends Node>(onClick: () => void) {
  const targetRef = useRef<R | null>(null);

  const handleClickOutside = useCallback(
    (event: { target?: any }) => {
      if (targetRef && targetRef.current && event.target instanceof Node && !targetRef.current.contains(event.target)) {
        onClick();
      }
    },
    [onClick]
  );

  useEventListener(globalThis.document, 'click', handleClickOutside);

  return targetRef;
}
