import { useAsyncData as _useAsyncData } from './useAsyncDataDefault';

let impl = _useAsyncData;

export const setup = (_impl: typeof _useAsyncData) => {
  impl = _impl;
};

export const useAsyncData: typeof _useAsyncData = (...args) => impl(...args);
