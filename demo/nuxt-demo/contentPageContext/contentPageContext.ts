import type { ContentPageContext } from '@demo/ui-kit';
import { ref } from 'vue';
import { useRouterHook } from './useRouter';

export const contentPageContext: ContentPageContext = {
  useState: ref,
  useAsyncData,
  useRouter: useRouterHook
};
