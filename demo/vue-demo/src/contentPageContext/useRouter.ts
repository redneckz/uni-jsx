import type { Router } from '@demo/ui-kit';

export const useRouter = (): Router => ({
  href: window.location.href,
  pathname: '/dummy-path',
  query: {},
  push: (url: string) => {
    console.log(url);
  }
});
