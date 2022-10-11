// @ts-ignore
import runtime from 'react/jsx-runtime';
// @ts-ignore
import * as React from 'react';
import { setup } from './setup';
import { setupHooks } from './hooks/index';

(globalThis as any).__UNI_REACT__ = true;

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

setupHooks(React);
