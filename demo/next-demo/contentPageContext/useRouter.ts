import type { Router } from '@demo/ui-kit';
import { useRouter as useRouterNext } from 'next/router';

export const useRouter = (): Router => {
  const { asPath, query, push } = useRouterNext();
  return {
    pathname: asPath,
    query,
    push,
    href: globalThis.location?.href
  };
};
