type PropsWithChildren<Props, VNode> = Props & { key?: string; children?: VNode };

export type UNIComponent<Props = {}, Context = any, VNode = any> = (
  props: PropsWithChildren<Props, VNode>,
  context?: Context
) => VNode;

interface UNIComponentInternal<Props = {}, Context = any, VNode = any> extends UNIComponent<Props, Context, VNode> {
  _tmpl?: UNIComponent<Props, Context, VNode>;
}

export const JSX = <Props = {}, Context = any, VNode = any>(
  Component: UNIComponent<Props, Context, VNode>
): UNIComponent<Props, Context, VNode> => {
  const Internal = Component as UNIComponentInternal<Props, Context, VNode>;

  if (!Internal._tmpl) {
    Internal._tmpl = (globalThis as any).__UNI_REACT__ ? Component : VueTmpl(Component);
  }

  return Internal._tmpl;
};

const VueTmpl = <Props = {}, Context = any, VNode = any>(
  Component: UNIComponent<Props, Context, VNode>
): UNIComponent<Props, Context, VNode> => {
  function JSXTmpl(rawProps: any, context: any) {
    const { children: rawChildren, ...props } = rawProps || {};

    const defaultSlot = context?.slots?.default; // Vue
    const children = rawChildren || (defaultSlot && defaultSlot());
    return Component(Object.assign(props, children && { children }), context);
  }

  JSXTmpl.inheritAttrs = false;

  return JSXTmpl;
};
