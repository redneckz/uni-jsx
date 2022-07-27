export type UseState = <State>(initialState: State) => {
  value: State;
};

export type AsyncDataHook = <Data, Error = any>(
  key: string,
  fetcher: () => Promise<Data>
) => { data?: { value?: Data }; error?: { value?: Error } };

export interface Router {
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  href?: string;
  basePath?: string;
  push: (url: string) => void;
}

export interface ContentPageContext {
  useState: UseState;
  useAsyncData: AsyncDataHook;
  useRouter: () => Router;
}
