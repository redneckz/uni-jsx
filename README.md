# Unified JSX

Unification layer between `React` and `Vue`

## Workspaces

- [uni-jsx/](./uni-jsx/README.md) Unified JSX core library
- [demo/ui-kit](./demo/ui-kit/README.md) package with an example of unified components
- [demo/vue-demo](./demo/vue-demo/README.md) `Vue 3` app which uses components from `demo/ui-kit`
- [demo/react-demo](./demo/react-demo/README.md) `React` app which uses components from `demo/ui-kit`
- [demo/nuxt-demo](./demo/nuxt-demo/README.md) `Nuxt 3` app which uses components from `demo/ui-kit`
- [demo/next-demo](./demo/next-demo/README.md) `Next.js` app which uses components from `demo/ui-kit`

## How-to demo

Install and build:

```shell
$ npm i # install deps
$ npm run build
```

React demo:

```shell
$ npm run start:react # http://localhost:8080
```

Vue demo:

```shell
$ npm run start:vue # http://localhost:8090
```

Next demo:

```shell
$ npm run start:next # http://localhost:8070
```

Nuxt demo:

```shell
$ npm run start:nuxt # http://localhost:8060
```

## How to use

```tsx
// Setup React JSX factory functions and hooks
import '@redneckz/uni-jsx/lib/setup.react';
// <xor> setup Vue3 factory function and React-like hooks
import '@redneckz/uni-jsx/lib/setup.vue';

import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';

export const ColoredButton = JSX<{ className?: string }>(({ className, children }) => {
  const [isRed, setRed] = useState(false);

  const toggleColor = useCallback(() => {
    setRed(_ => !_);
  }, []);

  const style = ['button', isRed ? 'text-red' : 'text-black', className].filter(Boolean).join(' ');

  return (
    <button className={style} onClick={toggleColor}>
      {children}
    </button>
  );
});
```

## Limitations

Common limitations:

- Events are streamed up as-is (avoid usage of normalized Event fields specific to `React` or `Vue`)

React specific limitations:

- NO refs forwarding

## React-like hooks

Examples:

```tsx
import { JSX } from '@redneckz/uni-jsx';
import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';

type ChuckJoke = {
  value?: string;
};

export const Joke = JSX(() => {
  const { data } = useAsyncData<ChuckJoke>('https://api.chucknorris.io/jokes/random', fetchJSON);

  return (
    <section>
      <p>Random Chuck Norris joke:</p>
      <p>{data?.value}</p>
    </section>
  );
});
```

The following React-like hooks are available:

- `useState`
- `useEffect`
- `useLayoutEffect`
- `useCallback`
- `useMemo`
- `useRef`
- `useAsyncData` (uses `useSWR` contract)

# License

[MIT](http://vjpr.mit-license.org)
