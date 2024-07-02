import { useCallback, useState } from './core';

export function useRerender(): () => void {
  const [, setCount] = useState(0);

  return useCallback(() => setCount(_ => (_ + 1) % (1 << 16)), []);
}
