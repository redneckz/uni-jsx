import type { ContentPageContext } from '@demo/ui-kit';
import { useRouterHook } from './useRouter';

export const contentPageContext: ContentPageContext = {
  useRouter: useRouterHook
};
