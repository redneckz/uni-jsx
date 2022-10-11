import { useAsyncData } from './useAsyncDataDefault';

jest.mock('./core', () => {
  let state: any = null;
  return {
    useMemo: (data: any) => data(),
    useEffect: (effect: any) => effect(),
    useState: (initial: any) => [
      state || initial,
      (_: any) => {
        state = _;
      }
    ]
  };
});

const dummyData = {
  value: 'dummValue'
};

const fetcher = () => dummyData;

const dummyError = new Error('Error');

const errorFetcher = () => {
  throw dummyError;
};

describe('useAsyncData', () => {
  it('should return data from fetcher', () => {
    useAsyncData('key', fetcher);
    const { data } = useAsyncData('key', fetcher);

    expect(data).toEqual(dummyData);
  });

  it('should return error from fetcher', () => {
    useAsyncData('key', errorFetcher);
    const { error } = useAsyncData('key', fetcher);

    expect(error).toEqual(dummyError);
  });
});
