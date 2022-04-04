type JSXFactory = Function;
type VueJSXFactory = Function;

interface JSXSetup {
  (_jsx: JSXFactory, _jsxs: JSXFactory): void;
  vue(h: VueJSXFactory): void;
}

export declare const setup: JSXSetup;
export declare const JSX: <Component extends Function>(_: Component) => Component;
