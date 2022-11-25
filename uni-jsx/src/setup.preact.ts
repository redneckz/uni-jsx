import { setupHooks } from './hooks/index';
import { setup } from './setup';
import { h } from 'preact';
// @ts-ignore
import * as React from 'react';

(globalThis as any).__UNI_REACT__ = true;

setup((type: any, rawProps: any) => {
  const { children, ...props } = rawProps;

  return h(type, props, children);
});

setupHooks(React);
