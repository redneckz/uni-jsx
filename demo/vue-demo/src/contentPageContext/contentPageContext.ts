import { ContentPageContext } from '@demo/ui-kit';
import { ref } from 'vue';

export const contentPageContext: ContentPageContext = {
  useState: ref,
  useAsyncData: (key, fetcher) => {
    const data = ref();
    fetcher().then(_ => {
      data.value = _;
    });
    return { data };
  }
};
