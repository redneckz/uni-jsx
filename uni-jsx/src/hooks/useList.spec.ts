import { useList } from './useList';

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

describe('useList', () => {
  beforeEach(() => {
    state = undefined;
  });

  it.only('should return initial value', () => {
    const [initialValue] = useList([1, 2, 3]);

    expect(initialValue).toEqual([1, 2, 3]);
  });

  describe('push', () => {
    it.only('should add item to the end of list', () => {
      expect.assertions(2);

      const [initialValue, { push }] = useList([1, 2, 3]);
      push(7);
      const [newValue] = useList();

      expect(initialValue).toEqual([1, 2, 3]);
      expect(newValue).toEqual([1, 2, 3, 7]);
    });
  });

  describe('pop', () => {
    it.only('should remove item from the end of list', () => {
      expect.assertions(2);

      const [initialValue, { pop }] = useList([1, 2, 3]);
      pop();
      const [newValue] = useList();

      expect(initialValue).toEqual([1, 2, 3]);
      expect(newValue).toEqual([1, 2]);
    });
  });

  describe('remove', () => {
    it.only('should remove the provided item', () => {
      expect.assertions(2);

      const [initialValue, { remove }] = useList([1, 2, 3]);
      remove(2);
      const [newValue] = useList();

      expect(initialValue).toEqual([1, 2, 3]);
      expect(newValue).toEqual([1, 3]);
    });
  });

  describe('clear', () => {
    it.only('should clear the list', () => {
      expect.assertions(2);

      const [initialValue, { clear }] = useList([1, 2, 3]);
      clear();
      const [newValue] = useList();

      expect(initialValue).toEqual([1, 2, 3]);
      expect(newValue).toEqual([]);
    });
  });
});
