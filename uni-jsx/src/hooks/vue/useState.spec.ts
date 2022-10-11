import { HookState } from './HookState';
import { mockCurrentHook } from './mockCurrentHook';
import { useState } from './useState';

jest.mock(`./getCurrentHook`, () => ({
  getCurrentHook: jest.fn()
}));

describe('useState', () => {
  let hook: HookState;

  beforeEach(() => {
    hook = mockCurrentHook();
  });

  it('should return initial state', () => {
    const [state] = useState(123);

    expect(state).toBe(123);
  });

  it('should return function to update state', () => {
    const [, setState] = useState(123);
    setState(456);
    const [state] = useState(123);

    expect(state).toBe(456);
  });
});
