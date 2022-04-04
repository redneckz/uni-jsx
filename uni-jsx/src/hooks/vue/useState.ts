import { getCurrentHook } from './getCurrentHook.js';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

export function useState<S>(initialValue: S): [S, Dispatch<SetStateAction<S>>];
export function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

export function useState<S>(initialValue?: S) {
  const [hook] = getCurrentHook<S>(initialValue);

  return [hook.state, hook.update];
}
