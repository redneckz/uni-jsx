type JSXFactory = Function;
type VueJSXFactory = Function;

interface JSXSetup {
  (_jsx: JSXFactory, _jsxs?: JSXFactory): void;
  vue(h: VueJSXFactory): void;
}

export declare const setup: JSXSetup;

type PropsWithChildren<Props, VNode> = Props & { children?: VNode };

export declare const JSX: <Props = {}, Context = any, VNode = any>(
  Component: (props: PropsWithChildren<Props, VNode>, context?: Context) => VNode
) => (props: PropsWithChildren<Props, VNode>, context?: Context) => VNode;
