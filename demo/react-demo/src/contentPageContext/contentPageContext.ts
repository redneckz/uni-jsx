import { ContentPageContext } from '@demo/ui-kit';
import { useEffect, useState as useStateReact } from 'react';
import { useState } from './useState';

export const contentPageContext: ContentPageContext = {
  useState: useState,
  useAsyncData: (key, fetcher) => {
    const [data, setData] = useStateReact();
    useEffect(() => {
      fetcher().then((_: any) => {
        setData(_);
      });
    }, [key, fetcher]);
    return { data: { value: data } };
  }
};
