import { useState as useStateReact } from 'react';

export const useState = <State>(initalState: State) => {
  const [value, setValue] = useStateReact(initalState);

  return {
    get value() {
      return value;
    },
    set value(v) {
      setValue(v);
    }
  };
};
