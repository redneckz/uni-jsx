import { getCurrentHook } from './getCurrentHook';

let updateFn = jest.fn();
let inst = { update: updateFn };

jest.mock('vue', () => ({
  getCurrentInstance: () => inst
}));

describe('getCurrentHook', () => {
  beforeEach(() => {
    updateFn = jest.fn();
    inst = { update: updateFn };
  });

  it('should return initial state', () => {
    const [hook] = getCurrentHook(123);
    expect(hook.state).toBe(123);
  });

  it('should rotate hook state for each call', () => {
    expect.assertions(2);
    const [hook1] = getCurrentHook(123);
    const [hook2] = getCurrentHook(456);

    expect(hook1.state).toBe(123);
    expect(hook2.state).toBe(456);
  });

  it('should return updater to trigger component update', callback => {
    expect.assertions(1);

    const [, update] = getCurrentHook(123);

    update();

    queueMicrotask(() => {
      expect(updateFn).toBeCalledTimes(1);
      callback();
    });
  });

  it('should rotate hooks state up to the top one', callback => {
    expect.assertions(3);

    const [top] = getCurrentHook(123);
    const [last] = getCurrentHook(456);

    expect(top.state).toBe(123);
    expect(last.state).toBe(456);

    top.state = 789;

    queueMicrotask(() => {
      const [hook] = getCurrentHook();
      expect(hook.state).toBe(789);
      callback();
    });
  });
});
