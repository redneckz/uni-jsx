export const JSX = (Component, propsList) => {
  if (Component._tmpl) return Component._tmpl;

  if (globalThis.__isReact) {
    Component._tmpl = ReactTmpl(Component);
  } else {
    Component._tmpl = VueTmpl(Component, propsList);
  }

  return Component._tmpl;
};

const VueTmpl = (Component, propsList) => ({
  props: propsList,
  setup(props, context) {
    const propsHandler = {
      get(target, key, receiver) {
        if (key === 'children') {
          return context.slots?.default();
        }
        return Reflect.get(target, key, receiver);
      }
    };
    const propsProxy = new Proxy(props, propsHandler);
    return Component(propsProxy, context);
  },
  inheritAttrs: false
});

const ReactTmpl = Component => (props, context) => {
  return Component(props, context)();
};
