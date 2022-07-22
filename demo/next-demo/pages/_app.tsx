import { setup } from '@redneckz/uni-jsx';
import type { AppProps } from 'next/app';
import runtime from 'react/jsx-runtime';

const { jsx, jsxs } = runtime as any;
// @ts-ignore;
globalThis.__isReact = true;
setup(jsx, jsxs);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
