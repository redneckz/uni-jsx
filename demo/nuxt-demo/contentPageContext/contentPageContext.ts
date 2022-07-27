import type { ContentPageContext } from '@demo/ui-kit';
import { ref } from 'vue';

export const contentPageContext: ContentPageContext = {
  useState: ref,
  useAsyncData
};
