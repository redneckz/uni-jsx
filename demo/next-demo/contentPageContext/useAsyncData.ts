import useSwr from 'swr';

export function useAsyncData<Data, Error = any>(key: string, fetcher: () => Promise<Data>) {
  const res = useSwr(key, fetcher);
  return {
    data: { value: res.data as Data },
    error: { value: res.error as Error }
  };
}
