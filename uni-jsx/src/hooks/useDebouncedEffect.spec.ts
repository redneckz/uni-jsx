import { useDebouncedEffect } from './useDebouncedEffect';

let state: any = undefined;

jest.mock('./core', () => ({
  useEffect: (effect: Function) => effect()
}));

describe('useDebouncedEffect', () => {
  beforeEach(() => {
    state = undefined;
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it.only('should call effect after some delay', () => {
    expect.assertions(2);

    const effect = jest.fn();

    useDebouncedEffect(effect, [], 1000);

    expect(effect).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(effect).toBeCalledTimes(1);
  });
});
