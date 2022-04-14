Object.defineProperty(exports, "__esModule", { value: true });
exports.jsxs = exports.jsx = exports.setup = void 0;
const setup = (_jsx, _jsxs) => {
    exports.setup._jsx = _jsx;
    exports.setup._jsxs = _jsxs || _jsx;
};
exports.setup = setup;
exports.setup.vue = _ => {
    const adapter = (type, { children, dangerouslySetInnerHTML, ...rest } = {}) => {
        const props = Object.assign({}, rest, dangerouslySetInnerHTML ? { innerHTML: dangerouslySetInnerHTML.__html } : {});
        const isComponent = typeof type !== 'string';
        const lazyChildren = isComponent ? () => children : children; // Vue optimization
        return _(type, props, lazyChildren);
    };
    (0, exports.setup)(adapter);
};
const jsx = (...args) => exports.setup._jsx(...args);
exports.jsx = jsx;
const jsxs = (...args) => exports.setup._jsxs(...args);
exports.jsxs = jsxs;
