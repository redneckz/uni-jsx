export interface Router {
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  href?: string;
  push: (url: string) => void;
}

export interface ContentPageContext {
  useRouter: () => Router;
}
