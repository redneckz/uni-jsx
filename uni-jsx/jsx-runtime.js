export const setup = (_jsx, _jsxs) => {
  setup._jsx = _jsx;
  setup._jsxs = _jsxs || _jsx;
};

setup.vue = _ => {
  const adapter = (type, { children, ...props } = {}) => _(type, props, children);
  setup(adapter);
};

export const jsx = (...args) => setup._jsx(...args);
export const jsxs = (...args) => setup._jsxs(...args);
