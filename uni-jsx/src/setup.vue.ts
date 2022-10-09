// @ts-ignore
import { h } from 'vue';
import { setup } from './setup.js';
import { setupHooks } from './hooks/index.js';
import * as Hooks from './hooks/vue/index.js';

setup((type: any, rawProps: any = {}) => {
  const { children, dangerouslySetInnerHTML, ...rest } = rawProps;
  const props = Object.assign({}, rest, dangerouslySetInnerHTML ? { innerHTML: dangerouslySetInnerHTML.__html } : {});
  const isComponent = typeof type !== 'string';
  const lazyChildren = isComponent && typeof children !== 'function' ? () => children : children; // Vue optimization
  return h(type, props, lazyChildren);
});

setupHooks(Hooks);
