import { JSX } from '@redneckz/uni-jsx';
import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';

const CHUCK_JOKE_URL = 'https://api.chucknorris.io/jokes/random';

type ChuckJoke = {
  value?: string;
};

export const Joke = JSX(() => {
  const { data: chuckJoke } = useAsyncData<ChuckJoke>(CHUCK_JOKE_URL, fetchJSON);

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
