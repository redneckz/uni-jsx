import { AsyncCache } from './AsyncCache';
import { useAsyncData } from './useAsyncData';

let stateSlots = [undefined, undefined]; // Data and Error
let slotIndex = 0;

jest.mock('./core', () => ({
  useMemo: (data: Function) => data(),
  useEffect: (effect: Function) => effect(),
  useState: () => {
    const currIndex = slotIndex;
    slotIndex = (slotIndex + 1) % stateSlots.length;
    return [
      stateSlots[currIndex],
      (_: any) => {
        stateSlots[currIndex] = _;
      }
    ];
  }
}));

const DATA_KEY = 'dummyKey';

describe('useAsyncData', () => {
  const cache: AsyncCache = {
    get: () => undefined,
    set: () => cache,
    has: () => false,
    delete: () => false,
    clear: () => {}
  };

  beforeEach(() => {
    stateSlots = [undefined, undefined];
    slotIndex = 0;
  });

  it.only('should return data from fetcher', async () => {
    expect.assertions(2);

    const dummyData = { value: 'dummyValue' };
    const fetcher = () => dummyData;

    useAsyncData(DATA_KEY, fetcher, { cache });
    await DATA_KEY;
    const { data, error } = useAsyncData(DATA_KEY, fetcher, { cache });

    expect(data).toEqual(dummyData);
    expect(error).toBeFalsy();
  });

  it('should return error from fetcher', () => {
    expect.assertions(2);

    const dummyError = new Error('Error');
    const errorFetcher = () => {
      throw dummyError;
    };

    useAsyncData(DATA_KEY, errorFetcher, { cache });
    const { data, error } = useAsyncData(DATA_KEY, errorFetcher, { cache });

    expect(data).toBeFalsy();
    expect(error).toEqual(dummyError);
  });

  it('should return fallback data if no data available', () => {
    const fallbackData = { value: 'fallbackValue' };
    const fetcher = () => ({ value: 'dummyValue' });

    useAsyncData(DATA_KEY, fetcher, { fallback: { key: fallbackData }, cache });
    const { data } = useAsyncData(DATA_KEY, fetcher, { cache });

    expect(data).toEqual(fallbackData);
  });
});
