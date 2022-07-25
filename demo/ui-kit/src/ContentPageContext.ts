export type UseState = <State>(initialState: State) => {
  value: State;
};

export type AsyncDataHook = <Data, Error = any>(
  key: string,
  fetcher: () => Promise<Data>
) => { data: { value: Data }; error: { value: Error } };

export interface ContentPageContext {
  useState: UseState;
  useAsyncData: AsyncDataHook;
}
