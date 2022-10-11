// @ts-ignore
import { h } from 'vue';
import { setup } from './setup';
import { setupHooks } from './hooks/index';
import * as Hooks from './hooks/vue/index';

setup((type: any, rawProps: any = {}) => {
  const { children, dangerouslySetInnerHTML, ...rest } = rawProps;
  const props = Object.assign({}, rest, dangerouslySetInnerHTML ? { innerHTML: dangerouslySetInnerHTML.__html } : {});
  const isComponent = typeof type !== 'string';
  const lazyChildren = isComponent && typeof children !== 'function' ? () => children : children; // Vue optimization
  return h(type, props, lazyChildren);
});

setupHooks(Hooks);
