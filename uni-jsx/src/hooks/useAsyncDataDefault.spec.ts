import { useAsyncData } from './useAsyncDataDefault';

jest.mock('./core', () => {
  const stateSlotCount = 2; // Data and Error
  let stateList = new Array(stateSlotCount);
  let stateIndex = 0;
  return {
    useMemo: (data: any) => data(),
    useEffect: (effect: any) => effect(),
    useState: (initial: any) => {
      const currIndex = stateIndex;
      stateIndex = (stateIndex + 1) % stateSlotCount;
      return [
        stateList[currIndex] || initial,
        (_: any) => {
          stateList[currIndex] = _;
        }
      ];
    }
  };
});

const DATA_KEY = 'dummyKey';

describe('useAsyncData', () => {
  beforeEach(() => {
    useAsyncData(DATA_KEY, () => null); // reset state
  });

  it.only('should return data from fetcher', () => {
    expect.assertions(2);

    const dummyData = { value: 'dummyValue' };
    const fetcher = () => dummyData;

    useAsyncData(DATA_KEY, fetcher);
    const { data, error } = useAsyncData(DATA_KEY, fetcher);

    expect(data).toEqual(dummyData);
    expect(error).toBeFalsy();
  });

  it('should return error from fetcher', () => {
    expect.assertions(2);

    const dummyError = new Error('Error');
    const errorFetcher = () => {
      throw dummyError;
    };

    useAsyncData(DATA_KEY, errorFetcher);
    const { data, error } = useAsyncData(DATA_KEY, errorFetcher);

    expect(data).toBeFalsy();
    expect(error).toEqual(dummyError);
  });

  it('should return fallback data if no data available', () => {
    const fallbackData = { value: 'fallbackValue' };
    const fetcher = () => ({ value: 'dummyValue' });

    useAsyncData(DATA_KEY, fetcher, { fallback: { key: fallbackData } });
    const { data } = useAsyncData(DATA_KEY, fetcher);

    expect(data).toEqual(fallbackData);
  });
});
