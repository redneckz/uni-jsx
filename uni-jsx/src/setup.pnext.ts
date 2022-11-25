import { h } from 'preact';
// @ts-ignore
import * as React from 'react';
import { setupHooks } from './hooks/index';
import { setup } from './setup';

(globalThis as any).__UNI_REACT__ = true;

setup(h);

setupHooks(React);
