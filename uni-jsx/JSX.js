import { setup } from './jsx-runtime.js';

export const JSX = (Component, propsList) => {
  if (Component._tmpl) return Component._tmpl;

  Component._tmpl = setup.isVue ? VueTmpl(Component, propsList) : ReactTmpl(Component);

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
