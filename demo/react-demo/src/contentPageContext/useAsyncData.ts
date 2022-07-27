import { AsyncDataHook } from '@demo/ui-kit';
import { useEffect, useState as useStateReact } from 'react';

export const useAsyncData: AsyncDataHook = (key, fetcher) => {
  const [data, setData] = useStateReact();
  useEffect(() => {
    fetcher().then((_: any) => {
      setData(_);
    });
  }, [key, fetcher]);
  return { data: { value: data } };
};
