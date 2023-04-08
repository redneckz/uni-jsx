import { useCallback, useState } from './core';

export function useDict<D extends Partial<Record<K, any>>, K extends keyof D = keyof D>(
  initialDict: D
): [
  D,
  {
    setDict: (_: D) => void;
    setItem: <ItemK extends K>(key: ItemK, value: D[ItemK]) => void;
    removeItem: (key: K) => void;
    assign: (_: Partial<D>) => void;
    unassign: (keys: K[]) => void;
    clear: () => void;
  }
] {
  const [dict, setDict] = useState<D>(initialDict);

  const setItem = useCallback(
    <ItemK extends K>(k: ItemK, v: D[ItemK]) => setDict(_ => Object.assign({}, _, { [k]: v })),
    []
  );
  const removeItemByKey =
    (k: K) =>
    ({ [k]: valueToRemove, ...rest } = {} as D) =>
      rest as D;
  const removeItem = useCallback((k: K) => setDict(removeItemByKey(k)), []);

  const assign = useCallback((entries: Partial<D>) => setDict(_ => Object.assign({}, _, entries)), []);
  const unassign = useCallback(
    (keysToRemove: K[]) => setDict(_ => keysToRemove.reduce((result, k) => removeItemByKey(k)(result), _)),
    []
  );

  const clear = useCallback(() => setDict(initialDict), [initialDict]);

  return [dict, { setDict, setItem, removeItem, assign, unassign, clear }];
}
