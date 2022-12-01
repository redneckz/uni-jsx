# Changelog

## [2.3.2] - 2022-12-1

### Update

- Update docs

## [2.3.1] - 2022-11-25

### Fix

- Remove `setup.pnext` function
- Fix `setup.preact` function (now for both `Next.js + Preact` and `Preact`)

## [2.3.0] - 2022-11-25

### New

- Support of `Preact + Next.js` (`setup.pnext` function)

## [2.2.0] - 2022-11-21

### New

- Support of `Preact` (`setup.preact` function)

## [2.1.7] - 2022-11-12

### New

- Support of refs to native DOM nodes (by means of `useRef` hook)

## [2.1.6] - 2022-10-21

### New

- Full support of functional universal components with hooks (stateful)
- React-like hooks for Vue3: `useState`, `useEffect`, `useLayoutEffect`, `useCallback`, `useMemo`, `useRef`
- useSWR-like hook `useAsyncData`

## [1.0.0] - 2022-07-25

### Breaking changes

- Npm workspaces instead of yarn workspaces
- New contract for universal components ([README.MD](uni-jsx/README.md))
- New demos ([Next.js](demo/next-demo/) and [Nuxt](demo/nuxt-demo/))
