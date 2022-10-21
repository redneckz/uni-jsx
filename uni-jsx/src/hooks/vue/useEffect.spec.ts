import { HookState } from './HookState';
import { mockCurrentHook } from './mockCurrentHook';
import { useEffect } from './useEffect';

jest.mock(`./getCurrentHook`, () => ({
  getCurrentHook: jest.fn()
}));

describe('useEffect', () => {
  let hook: HookState;

  beforeEach(() => {
    hook = mockCurrentHook();
  });

  it('should invoke effect on init', callback => {
    expect.assertions(1);
    const effect = jest.fn();

    useEffect(effect, []);

    queueMicrotask(() => {
      expect(effect).toBeCalledTimes(1);
      callback();
    });
  });

  it('should invoke effect on dependencies change', callback => {
    expect.assertions(1);
    const effect = jest.fn();

    useEffect(effect, [1, 2, 3]);
    useEffect(effect, [1, 2, 0]);

    queueMicrotask(() => {
      expect(effect).toBeCalledTimes(2);
      callback();
    });
  });

  it('should NOT invoke effect if dependencies does NOT changed', callback => {
    expect.assertions(1);
    const effect = jest.fn();

    useEffect(effect, [1, 2, 3]);
    useEffect(effect, [1, 2, 3]);

    queueMicrotask(() => {
      expect(effect).toBeCalledTimes(1);
      callback();
    });
  });

  it('should invoke cleanup just before next effect', callback => {
    expect.assertions(1);
    const cleanup = jest.fn();
    const effect = () => cleanup;

    useEffect(effect, [1, 2, 3]);
    useEffect(effect, [1, 2, 0]);

    queueMicrotask(() => {
      expect(cleanup).toBeCalledTimes(1);
      callback();
    });
  });
});
