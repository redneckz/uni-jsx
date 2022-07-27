import type { ContentPageContext } from '@demo/ui-kit';
import { ref } from 'vue';
import { useAsyncData } from './useAsyncData';
import { useRouter } from './useRouter';

export const contentPageContext: ContentPageContext = {
  useState: ref,
  useAsyncData,
  useRouter
};
