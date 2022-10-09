type JSXFactory = Function;

export type JSXSetup = (_jsx: JSXFactory, _jsxs?: JSXFactory) => void;

export const setup: JSXSetup = (_jsx, _jsxs) => {
  (globalThis as any)._uni = {
    _jsx,
    _jsxs: _jsxs || _jsx
  };
};
