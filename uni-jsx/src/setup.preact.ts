import { h } from 'preact';
import * as hooks from 'preact/hooks';
import { setup } from './setup';
import { setupHooks } from './hooks/index';

(globalThis as any).__UNI_REACT__ = true;

setup(h);

setupHooks(hooks);
