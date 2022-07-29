import { Router } from '@demo/ui-kit';

export const useRouterHook = (): Router => {
  const router = useRouter();
  const route = useRoute();

  return {
    pathname: route.path,
    query: route.query,
    push: router.push,
    href: globalThis.location?.href
  };
};
