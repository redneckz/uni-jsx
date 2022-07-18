export type UseState = <State>(initialState: State) => {
  value: State;
};

export interface ContentPageContext {
  useState: UseState;
}
