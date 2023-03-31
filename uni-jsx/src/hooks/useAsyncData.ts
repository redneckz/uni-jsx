import { useEffect, useMemo, useState } from './core';
import { isFilled } from './isFilled';
import { AsyncCache, applyCache } from './AsyncCache';

type Empty = null | undefined | false;
type ArgumentsTuple = [any, ...unknown[]] | readonly [any, ...unknown[]];
type SimpleKey = string;
type Arguments = SimpleKey | ArgumentsTuple | Record<any, any> | Empty;

export type Key = Arguments | (() => Arguments);

type FetcherResponse<Data = unknown> = Data | Promise<Data>;

type SimpleFetcher<Data = unknown> = (key: SimpleKey) => FetcherResponse<Data>;

export type Fetcher<Data = unknown, K extends Key = Key> = K extends () => readonly [...infer Args] | Empty
  ? (...args: [...Args]) => FetcherResponse<Data>
  : K extends readonly [...infer Args]
  ? (...args: [...Args]) => FetcherResponse<Data>
  : K extends () => infer Arg | Empty
  ? (...args: [Arg]) => FetcherResponse<Data>
  : K extends Empty
  ? never
  : K extends infer Arg
  ? (...args: [Arg]) => FetcherResponse<Data>
  : never;

export interface AsyncDataOptions {
  fallback?: Record<SimpleKey, unknown>;
  cache?: AsyncCache;
}

export type MutatorCallback<D = any> = (data?: D) => Promise<undefined | D> | undefined | D;
export type Mutator<D> = (data?: D | Promise<D> | MutatorCallback<D>) => Promise<D | undefined>;

export interface AsyncDataResponse<Data = any, Error = any> {
  data?: Data;
  error?: Error;
  mutate: Mutator<Data>; // TODO: No supported
  isValidating: boolean; // TODO: No supported
}

const isSimpleKey = (args?: any[]): args is [SimpleKey] =>
  Boolean(args && Array.isArray(args) && args.length === 1 && typeof args[0] === 'string');

export function useAsyncData<Data = any, Err = any, K extends Key = string>(
  key: K,
  fetcher: Fetcher<Data, K>,
  { fallback, cache }: AsyncDataOptions = {}
): AsyncDataResponse<Data, Err> {
  const args = useMemo(() => keyToArgs(key), [key]);

  const [simpleKey] = isSimpleKey(args) ? args : [];

  const [data, setData] = useState<Data | undefined>(undefined);
  const [error, setError] = useState<Err | undefined>(undefined);

  useEffect(() => {
    const isEmptyKey = !args.some(isFilled);
    if (isEmptyKey) {
      return;
    }

    let canceled = false;
    const setResult = (newData: Data | undefined, err?: Err) => {
      if (!canceled) {
        setData(newData);
        setError(err);
      }
    };

    (async () => {
      try {
        setResult(await (simpleKey ? applyCache(fetcher as SimpleFetcher<Data>, cache)(simpleKey) : fetcher(...args)));
      } catch (err) {
        setResult(undefined, err as Err);
      }
    })();

    return () => {
      canceled = true;
    };
  }, [fetcher, cache, args]);

  const fallbackData = fallback && simpleKey && (fallback[simpleKey] as Data);

  return {
    data: !data && fallbackData ? fallbackData : data,
    error,
    mutate: () => Promise.resolve(undefined), // TODO Clean up cache
    isValidating: false
  };
}

function keyToArgs<K extends Key = null>(key: K): Parameters<Fetcher<unknown, Key>> {
  if (Array.isArray(key)) {
    return key;
  } else if (key instanceof Function) {
    return keyToArgs(key());
  } else {
    return [key];
  }
}
