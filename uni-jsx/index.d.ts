type JSXFactory = Function;
type VueJSXFactory = Function;

interface JSXSetup {
  (_jsx: JSXFactory, _jsxs?: JSXFactory): void;
  vue(h: VueJSXFactory): void;
}

export declare const setup: JSXSetup;

type PropsWithChildren<Props, VNode> = Props & { key?: string; children?: VNode };

type Renderer<VNode = any> = () => VNode;

export declare const JSX: <Props = {}, Context = any, VNode = any>(
  Component: (props: PropsWithChildren<Props, VNode>, context?: Context) => Renderer<VNode>,
  propsList?: string[]
) => (props: PropsWithChildren<Props, VNode>, context?: Context) => VNode;
