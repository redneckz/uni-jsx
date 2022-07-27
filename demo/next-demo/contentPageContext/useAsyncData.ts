import { AsyncDataHook } from '@demo/ui-kit';
import useSwr from 'swr';

export const useAsyncData: AsyncDataHook = (key, fetcher) => {
  const res = useSwr(key, fetcher);
  return {
    data: { value: res.data },
    error: { value: res.error }
  };
};
