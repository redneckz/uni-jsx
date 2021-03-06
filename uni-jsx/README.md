# @redneckz/uni-jsx

`React` as well as `Vue` comes with `Virtual DOM` and `JSX` approaches.
There are a few differences at the low level.

This nano-library negates the differences between them on `JSX` level.
Making it possible to implement universal components that work without recompiling in both `React` and `Vue`.

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
    "jsxImportSource": "@redneckz/uni-jsx",
    ...
  }
  ...
}
```

Universal component:

```tsx
import { JSX } from '@redneckz/uni-jsx';

export interface TextBlockProps {
  primary?: string;
  onCite?: (ev: PointerEvent) => void;
}

export const TextBlock = JSX<TextBlockProps>(({ primary, children, onCite }) => {
  return (
    <section className="text-block__root">
      {primary && (
        <p className="text-block__primary">
          <em>{primary}</em>
        </p>
      )}
      {children && (
        <p><a href="#" onClick={onCite}>{children}</a></p>
      )}
    </section>
  );
});
```

## [Vue] How to use universal components

```ts
import { createApp, h } from 'vue';
import App from './App.vue';
import { setup } from '@redneckz/uni-jsx';

setup.vue(h);

createApp(App).mount('#app');
```

```vue
<template>
  <h1>Vue with unified components</h1>
  <text-block primary="Primary text..." @cite="debugEvent">
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
    debugEvent(event: PointerEvent) {
      console.log(event);
    }
  }
});
</script>
```

## [React] How to use universal components

```tsx
import runtime from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import { setup } from '@redneckz/uni-jsx';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
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
      <TextBlock primary="Primary text..." onCite={debugEvent}>
        <cite>http://www.asimovonline.com</cite>
      </TextBlock>
    </>
  );
}
```

## How it works

TODO

## Limitations

Common limitations:

- NO lifecycle support, just JSX
- NO common hooks (`React` hooks and `Vue Composition API` require a lot of effort to generalize)
- Events are streamed up as-is (avoid usage of normalized Event fields specific to `React` or `Vue`)

React:

- NO refs forwarding

Vue:

TODO

# License

[MIT](http://vjpr.mit-license.org)
