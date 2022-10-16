# @redneckz/uni-jsx

Unification layer between `React` and `Vue3`. Write React-like unified components and use everywhere without recompilation.

[![NPM Version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

`React` as well as `Vue3` comes with `Virtual DOM` and `JSX` approaches.
There are a few differences at the low level.

This nano-library negates the differences between them on `JSX` level.
Making it possible to implement universal components that work without recompiling in both `React` and `Vue3`.

Also the following React-like hooks are available for `Vue3`:

- `useState`
- `useEffect`
- `useLayoutEffect`
- `useCallback`
- `useMemo`
- `useRef`
- and useSWR-like `useAsyncData`

## Install

```shell
$ npm i --save @redneckz/uni-jsx
```

or:

```shell
$ yarn add @redneckz/uni-jsx
```

## How to declare universal components

`React 17` introduced new JSX transform with separate runtime `react/jsx-runtime` which can be replaced with the custom one.
For details please check this out https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

To transpile universal components configure `TypeScript` as follows:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@redneckz/uni-jsx"
    // ...
  }
  // ...
}
```

Universal component:

```tsx
import { JSX } from '@redneckz/uni-jsx';
import { useState, useCallback } from '@redneckz/uni-jsx/lib/hooks';

export interface TextBlockProps {
  html?: string;
  onClick?: (event: Event) => void;
}

export const TextBlock = JSX<TextBlockProps>(props => {
  const { html, onClick, children } = props;

  const [isDark, setDark] = useState(false);
  const handleClick = useCallback(
    (event: Event) => {
      setDark(_ => !_);
      onClick && onClick(event);
    },
    [onClick]
  );

  const style = isDark ? { color: '#CCC', backgroundColor: '#777' } : {};

  return (
    <section className="text-block" style={style} onClick={handleClick}>
      {html && <p dangerouslySetInnerHTML={{ __html: html }}></p>}
      {children && <p>{children}</p>}
    </section>
  );
});
```

## [Vue3] How to use universal components

```ts
import '@redneckz/uni-jsx/lib/setup.vue';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

```vue
<template>
  <h1>Vue with unified components</h1>
  <text-block html="<em>Primary text...</em>" @click="debugEvent">
    <cite>http://www.asimovonline.com</cite>
  </text-block>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TextBlock } from '@demo/ui-kit';

export default defineComponent({
  name: 'App',
  components: {
    TextBlock
  },
  methods: {
    debugEvent(event: Event) {
      console.log(event);
    }
  }
});
</script>
```

## [React] How to use universal components

```tsx
import '@redneckz/uni-jsx/lib/setup.react';

import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script>
    globalThis.__UNI_REACT__ = true; // Temporal requirement
  </script>
</html>
```

```tsx
import { useCallback } from 'react';
import { TextBlock } from '@demo/ui-kit';

export function App() {
  const debugEvent = useCallback((_: unknown) => {
    console.log(_);
  }, []);

  return (
    <>
      <h1>React with unified components</h1>
      <TextBlock html="<em>Primary text...</em>" onClick={debugEvent}>
        <cite>http://www.asimovonline.com</cite>
      </TextBlock>
    </>
  );
}
```

## [Next.js] How to use universal components

Please take a look at `/demo/next-demo`

## [Nuxt3] How to use universal components

Please take a look at `/demo/nuxt-demo`

## How it works

TODO

## Limitations

Common limitations:

- Events are streamed up as-is (avoid usage of normalized Event fields specific to `React` or `Vue`)

React:

- NO refs forwarding

# License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://badge.fury.io/js/%40redneckz%2Funi-jsx.svg
[npm-url]: https://www.npmjs.com/package/%40redneckz%2Funi-jsx
[build-image]: https://github.com/redneckz/uni-jsx/actions/workflows/main.yml/badge.svg
[build-url]: https://github.com/redneckz/uni-jsx/actions/workflows/main.yml
[bundlephobia-image]: https://badgen.net/bundlephobia/min/@redneckz/uni-jsx
[bundlephobia-url]: https://bundlephobia.com/result?p=@redneckz/uni-jsx
