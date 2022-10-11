import type * as Hooks from './vue/index';

let _hooks: typeof Hooks;

export const setupHooks = (_: typeof Hooks) => {
  _hooks = _;
};

const lazyHook =
  <N extends keyof typeof _hooks>(name: N): typeof Hooks[N] =>
  (...args: any[]) =>
    (_hooks[name] as any)(...args);

export const useState = lazyHook('useState');
export const useEffect = lazyHook('useEffect');
export const useLayoutEffect = lazyHook('useLayoutEffect');
export const useCallback = lazyHook('useCallback');
export const useMemo = lazyHook('useMemo');
export const useRef = lazyHook('useRef');
