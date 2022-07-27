import { UseState } from '@demo/ui-kit';
import { useState as useStateReact } from 'react';

export const useState: UseState = initalState => {
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
