export const JSX = Component => {
  if (Component._tmpl) return Component._tmpl;

  Component._tmpl = function JSXTmpl(rawProps, context) {
    const { children: rawChildren, ...props } = rawProps || {};

    const defaultSlot = context?.slots?.default; // Vue
    const children = rawChildren || (defaultSlot && defaultSlot());
    return Component(Object.assign(props, children && { children }), context);
  };

  Component._tmpl.inheritAttrs = false; // Vue

  return Component._tmpl;
};
