import { areDepsEqual } from './areDepsEqual';

describe('areDepsEqual', () => {
  it('should compare dependency lists by reference', () => {
    const deps: any[] = [];
    expect(areDepsEqual(deps, deps)).toBe(true);
  });

  it('should compare corresponding dependencies by reference (one by one)', () => {
    expect.assertions(2);

    expect(areDepsEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(areDepsEqual([1, 2, 3], [1, 2, 0])).toBe(false);
  });

  it('should compare even empty lists', () => {
    expect(areDepsEqual([], [])).toBe(true);
  });
});
