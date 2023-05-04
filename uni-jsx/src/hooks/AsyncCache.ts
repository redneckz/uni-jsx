import { isFilled } from './isFilled';

export interface AsyncCache<K = string, V = any> {
  get(key: K): Promise<V> | V | undefined;
  set(key: K, value: Promise<V> | V): void;
  delete(key: K): boolean;
  clear(): void;
}

export const noCache: AsyncCache = {
  get: () => undefined,
  set: () => {},
  delete: () => false,
  clear: () => {}
};

export const defaultCache: AsyncCache = new Map();

export const applyCache =
  <Data>(fetcher: (...args: any[]) => Promise<Data> | Data, cache = defaultCache) =>
  (args: any[]): Promise<Data> | Data => {
    const key = computeKey(args);

    const cachedData = cache.get(key);
    if (key && isFilled(cachedData)) {
      return cachedData as Promise<Data> | Data;
    }

    const data = fetcher(...args);
    if (key && isFilled(data)) {
      cache.set(key, Promise.resolve(data));
    }

    return data;
  };

const isKey = (args: any[]): args is any[] =>
  Boolean(args?.every(_ => (Array.isArray(_) ? isKey(_) : !_ || typeof _ === 'string')));
const computeKey = (args: any[]): string => (isKey(args) ? args.toString() : '');
