export const setup = (_jsx, _jsxs) => {
  setup._jsx = _jsx;
  setup._jsxs = _jsxs || _jsx;
};

setup.vue = _ => {
  const adapter = (type, { children, dangerouslySetInnerHTML, ...rest } = {}) => {
    const props = Object.assign({}, rest, dangerouslySetInnerHTML ? { innerHTML: dangerouslySetInnerHTML.__html } : {});
    const isComponent = typeof type !== 'string';
    const lazyChildren = isComponent ? () => children : children; // Vue optimization
    return _(type, props, lazyChildren);
  };
  setup(adapter);
};

export const jsx = (...args) => setup._jsx(...args);
export const jsxs = (...args) => setup._jsxs(...args);
