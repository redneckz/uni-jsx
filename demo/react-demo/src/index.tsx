import runtime from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import { setup } from '@redneckz/uni-jsx';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
