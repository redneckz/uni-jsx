import { useDict } from './useDict';

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

interface SomeForm {
  foo?: string;
  bar?: number;
  baz?: boolean;
}

describe('useDict', () => {
  beforeEach(() => {
    state = undefined;
  });

  it.only('should return initial value', () => {
    const [initialValue] = useDict<SomeForm>({ foo: 'foo' });

    expect(initialValue).toEqual({ foo: 'foo' });
  });

  describe('setDict', () => {
    it.only('should update dictionary state', () => {
      expect.assertions(2);

      const [initialValue, { setDict }] = useDict<SomeForm>({});
      setDict({ foo: 'foo' });
      const [newValue] = useDict({});

      expect(initialValue).toEqual({});
      expect(newValue).toEqual({ foo: 'foo' });
    });
  });

  describe('setItem', () => {
    it.only('should update some entry by key', () => {
      expect.assertions(2);

      const [initialValue, { setItem }] = useDict<SomeForm>({});
      setItem('foo', '123');
      const [newValue] = useDict({});

      expect(initialValue).toEqual({});
      expect(newValue).toEqual({ foo: '123' });
    });
  });

  describe('removeItem', () => {
    it.only('should remove some entry by key', () => {
      expect.assertions(2);

      const [initialValue, { removeItem }] = useDict<SomeForm>({ foo: '123', bar: 123, baz: true });
      removeItem('bar');
      const [newValue] = useDict({});

      expect(initialValue).toEqual({ foo: '123', bar: 123, baz: true });
      expect(newValue).toEqual({ foo: '123', baz: true });
    });
  });

  describe('assign', () => {
    it.only('should update bunch of entries', () => {
      expect.assertions(2);

      const [initialValue, { assign }] = useDict<SomeForm>({ foo: '123' });
      assign({ bar: 123, baz: true });
      const [newValue] = useDict({});

      expect(initialValue).toEqual({ foo: '123' });
      expect(newValue).toEqual({ foo: '123', bar: 123, baz: true });
    });
  });

  describe('unassign', () => {
    it.only('should remove bunch of entries', () => {
      expect.assertions(2);

      const [initialValue, { unassign }] = useDict<SomeForm>({ foo: '123', bar: 123, baz: true });
      unassign(['foo', 'baz']);
      const [newValue] = useDict({});

      expect(initialValue).toEqual({ foo: '123', bar: 123, baz: true });
      expect(newValue).toEqual({ bar: 123 });
    });
  });

  describe('clear', () => {
    it.only('should reset dictionary to initial state', () => {
      expect.assertions(2);

      const [initialValue, { assign, clear }] = useDict<SomeForm>({ foo: '', bar: 0, baz: false });
      assign({ foo: '123', bar: 123, baz: true });
      clear();
      const [newValue] = useDict({});

      expect(initialValue).toEqual({ foo: '', bar: 0, baz: false });
      expect(newValue).toEqual({ foo: '', bar: 0, baz: false });
    });
  });
});
