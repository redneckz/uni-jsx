import { useCallback, useState } from './core';

export function useBool(defaultValue = false): [
  boolean,
  {
    setValue: (_: boolean) => void;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
  }
] {
  const [value, setValue] = useState<boolean>(defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(_ => !_), []);

  return [value, { setValue, setTrue, setFalse, toggle }];
}
