import { useBool } from './useBool';

let state: any = undefined;

jest.mock('./core', () => ({
  useCallback: (callback: any) => callback,
  useState: (initial: any) => {
    if (state === undefined) {
      state = initial;
    }
    return [
      state,
      (_: any) => {
        state = _ instanceof Function ? _(state) : _;
      }
    ];
  }
}));

describe('useBool', () => {
  beforeEach(() => {
    state = undefined;
  });

  it.only('should return initial value', () => {
    const [initialValue] = useBool(true);

    expect(initialValue).toBe(true);
  });

  describe('setTrue', () => {
    it.only('should raise the flag', () => {
      expect.assertions(2);

      const [initialValue, { setTrue }] = useBool();
      setTrue();
      const [newValue] = useBool();

      expect(initialValue).toBe(false);
      expect(newValue).toBe(true);
    });
  });

  describe('setFalse', () => {
    it.only('should lower the flag', () => {
      expect.assertions(2);

      const [initialValue, { setFalse }] = useBool(true);
      setFalse();
      const [newValue] = useBool();

      expect(initialValue).toBe(true);
      expect(newValue).toBe(false);
    });
  });

  describe('toggle', () => {
    it.only('should toggle the raised flag', () => {
      expect.assertions(2);

      const [initialValue, { toggle }] = useBool(true);
      toggle();
      const [newValue] = useBool();

      expect(initialValue).toBe(true);
      expect(newValue).toBe(false);
    });

    it.only('should toggle the lowered flag', () => {
      expect.assertions(2);

      const [initialValue, { toggle }] = useBool(false);
      toggle();
      const [newValue] = useBool();

      expect(initialValue).toBe(false);
      expect(newValue).toBe(true);
    });
  });
});
