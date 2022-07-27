import { ContentPageContext } from '@demo/ui-kit';
import { ref } from 'vue';
import { useAsyncData } from './useAsyncData';

export const contentPageContext: ContentPageContext = {
  useState: ref,
  useAsyncData
};
