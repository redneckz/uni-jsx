import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useMemo } from '@redneckz/uni-jsx/lib/hooks';
import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';

const CHUCK_JOKE_URL = 'https://api.chucknorris.io/jokes/random';

interface JokeProps {
  timeout?: number;
  rnd?: number;
}

type ChuckJoke = {
  value?: string;
};

const CATEGORIES = [
  'animal',
  'career',
  'celebrity',
  'dev',
  'explicit',
  'fashion',
  'food',
  'history',
  'money',
  'movie',
  'music',
  'political',
  'religion',
  'science',
  'sport',
  'travel'
];

export const Joke = JSX<JokeProps>(({ timeout = 0, rnd = 0 }) => {
  const fetcher = useCallback(
    async (url: string, category: string) => {
      await delay(timeout);
      return fetchJSON<ChuckJoke>(`${url}?category=${category}`);
    },
    [timeout]
  );

  const key: [string, string] = useMemo(() => [CHUCK_JOKE_URL, CATEGORIES[rnd % CATEGORIES.length]], [rnd]);

  const { data: chuckJoke } = useAsyncData(key, fetcher);

  return (
    <section>
      <div>Random Chuck Norris joke:</div>
      <div>{chuckJoke?.value}</div>
    </section>
  );
});

async function fetchJSON<D>(url: string): Promise<D> {
  const response = await fetch(url);
  return await response.json();
}

async function delay(timeout: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
