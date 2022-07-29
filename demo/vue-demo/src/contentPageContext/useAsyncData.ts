import type { AsyncDataHook } from '@demo/ui-kit';
import { ref } from 'vue';

export const useAsyncData: AsyncDataHook = (key, fetcher) => {
  const data = ref();
  fetcher().then(_ => {
    data.value = _;
  });
  return { data };
};
