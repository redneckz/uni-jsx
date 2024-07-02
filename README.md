# @redneckz/uni-jsx

Unification layer between `React`, `Preact` and `Vue3`. Write React-like unified components and use everywhere without recompilation.

[![NPM Version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

`React` as well as `Vue3` comes with `Virtual DOM` and `JSX` approaches.
There are a few differences at the low level.

This nano-library negates the differences between them on `JSX` level.
Making it possible to implement universal components that work without recompiling in both `React` and `Vue3`.

Also the following React-like core hooks are available for `Vue3`:

- `useState`
- `useEffect`
- `useLayoutEffect`
- `useCallback`
- `useMemo`
- `useRef`

Additional reusable hooks:

```ts
const [value, { setValue, setTrue, setFalse, toggle }] = useBool(false);
const [list, { setList, push, pop, remove, clear }] = useList([]);
const [dict, { setDict, setItem, removeItem, assign, unassign, clear }] = useDict({});

// See useSWR
const { data, error } = useAsyncData(key, fetcher, { fallback, cache });

useEventListener(target, 'eventType', handler);

// Useful for popups
const targetRef = useOutsideClick(handleOutsideClick);

const globalLibrary = useScript('globalName', 'https://some/script.js');
```

## Workspaces

- [uni-jsx/](./uni-jsx/README.md) Unified JSX core library
- [demo/ui-kit](./demo/ui-kit/README.md) package with an example of unified components
- [demo/vue-demo](./demo/vue-demo/README.md) `Vue3` app which uses components from `demo/ui-kit`
- [demo/react-demo](./demo/react-demo/README.md) `React` app which uses components from `demo/ui-kit`
- [demo/nuxt-demo](./demo/nuxt-demo/README.md) `Nuxt 3` app which uses components from `demo/ui-kit`
- [demo/next-demo](./demo/next-demo/README.md) `Next.js` app which uses components from `demo/ui-kit`
- [demo/preact-demo](./demo/preact-demo/README.md) `Preact` app which uses components from `demo/ui-kit`

## How-to start demo

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

Preact demo:

```shell
$ npm run start:preact
```

## How to use

[Documentation](uni-jsx/README.md)

## Limitations

Common limitations:

- Events are streamed up as-is (avoid usage of normalized Event fields specific to `React` or `Vue`)

React specific limitations:

- NO refs forwarding

# License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://badge.fury.io/js/%40redneckz%2Funi-jsx.svg
[npm-url]: https://www.npmjs.com/package/%40redneckz%2Funi-jsx
[build-image]: https://github.com/redneckz/uni-jsx/actions/workflows/main.yml/badge.svg
[build-url]: https://github.com/redneckz/uni-jsx/actions/workflows/main.yml
[bundlephobia-image]: https://badgen.net/bundlephobia/min/@redneckz/uni-jsx
[bundlephobia-url]: https://bundlephobia.com/result?p=@redneckz/uni-jsx
