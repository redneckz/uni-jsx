import { JSX } from '@redneckz/uni-jsx';
import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';

const CHUCK_JOKE_URL = 'https://api.chucknorris.io/jokes/random';

type ChuckJoke = {
  value?: string;
};

interface JokeProps {
  timeout: number;
}

export const Joke = JSX<JokeProps>(props => {
  const { timeout } = props;

  const fetcher = useCallback(async () => {
    await delay(timeout);
    const data = await fetchJSON<ChuckJoke>(CHUCK_JOKE_URL);
    await delay(1000);
    return data;
  }, [timeout]);

  const { data: chuckJoke } = useAsyncData<ChuckJoke>(CHUCK_JOKE_URL, fetcher);

  return (
    <section>
      <div>Random Chuck Norris joke:</div>
      <div>{chuckJoke?.value}</div>
    </section>
  );
});

async function delay(timeout: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

async function fetchJSON<D>(url: string): Promise<D> {
  const response = await fetch(url);
  return await response.json();
}
