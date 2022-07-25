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
