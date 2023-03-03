import { isFilled } from './isFilled';

export interface AsyncCache<K = string, V = any> {
  get(key: K): Promise<V> | undefined;
  has(key: K): boolean;
  set(key: K, value: Promise<V>): this;
  delete(key: K): boolean;
  clear(): void;
}

const defaultCache: AsyncCache = new Map();

export const applyCache =
  <Data>(fetcher: (key: string) => Promise<Data> | Data, cache = defaultCache) =>
  (key: string): Promise<Data> | Data => {
    const cachedData = cache.get(key);
    if (isFilled(cachedData)) {
      return cachedData as Promise<Data>;
    }

    const data = fetcher(key);
    if (isFilled(data)) {
      cache.set(key, Promise.resolve(data));
    } else {
      cache.delete(key);
    }

    return data;
  };
