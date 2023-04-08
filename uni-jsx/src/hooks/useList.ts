import { useCallback, useState } from './core';

export function useList<T>(initialList: T[] = []): [
  T[],
  {
    setList: (_: T[]) => void;
    push: (item: T) => void;
    pop: () => void;
    remove: (item: T) => void;
    clear: () => void;
  }
] {
  const [list, setList] = useState<T[]>(initialList);

  const push = useCallback((item: T) => setList(_ => [..._, item]), []);
  const pop = useCallback(() => setList(_ => _.slice(0, -1)), []);
  const remove = useCallback((item: T) => setList(_ => _.filter(currentItem => currentItem !== item)), []);
  const clear = useCallback(() => setList([]), []);

  return [list, { setList, push, pop, remove, clear }];
}
