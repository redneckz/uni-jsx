import { ref } from 'vue';
import type { ContentPageContext } from '@demo/ui-kit';

export const contentPageContext: ContentPageContext = {
  useState: ref,
  useAsyncData
};
