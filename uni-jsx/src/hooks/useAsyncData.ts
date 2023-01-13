import { useEffect, useMemo, useState } from './core';

type Empty = null | undefined | false;
type ArgumentsTuple = [any, ...unknown[]] | readonly [any, ...unknown[]];
type SimpleKey = string;
type Arguments = SimpleKey | ArgumentsTuple | Record<any, any> | Empty;

export type Key = Arguments | (() => Arguments);

type FetcherResponse<Data = unknown> = Data | Promise<Data>;

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
}

export type MutatorCallback<D = any> = (data?: D) => Promise<undefined | D> | undefined | D;
export type Mutator<D> = (data?: D | Promise<D> | MutatorCallback<D>) => Promise<D | undefined>;

export interface AsyncDataResponse<Data = any, Error = any> {
  data?: Data;
  error?: Error;
  mutate: Mutator<Data>; // TODO: No supported
  isValidating: boolean; // TODO: No supported
}

const consistentDataMap = new Map();

export function useAsyncData<Data = any, Err = any, K extends Key = string>(
  key: K,
  fetcher: Fetcher<Data, K>,
  { fallback }: AsyncDataOptions = {}
): AsyncDataResponse<Data, Err> {
  const args = useMemo(() => keyToArgs(key), [key]);

  const [data, setData] = useState<Data>();
  const [error, setError] = useState<Err>();

  const updateData = (_: Data) => {
    setData(_);
    setError(undefined);
  };
  const updateError = (_: Err) => {
    setData(undefined);
    setError(_ as Err);
  };

  const chainToConsistentResult = (_: Promise<Data>) => {
    _.then(rawData => consistentDataMap.get(args) || rawData)
      .then(updateData)
      .catch(updateError);
  };

  useEffect(() => {
    const isEmptyKey = args.every(_ => _ === null);

    if (isEmptyKey) {
      return;
    }

    try {
      const _ = fetcher(...args);

      if ('then' in _) {
        chainToConsistentResult(_);
      } else {
        updateData(_);
      }
    } catch (err) {
      updateError(err as Err);
    }
  }, [fetcher, ...args]);

  const simpleKey = args[0];
  const fallbackData = fallback && typeof simpleKey === 'string' && (fallback[simpleKey] as Data);

  return {
    data: !data && fallbackData ? fallbackData : data,
    error,
    mutate: () => Promise.resolve(undefined),
    isValidating: false
  };
}

function keyToArgs<K extends Key = null>(key: K): Parameters<Fetcher<unknown, Key>> {
  if (!key) {
    return [key];
  }

  if (Array.isArray(key)) {
    return key;
  } else if (key instanceof Function) {
    return keyToArgs(key());
  } else {
    return [key];
  }
}
