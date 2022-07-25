import { JSX } from '@redneckz/uni-jsx';
import { AsyncDataHook, ContentPageContext } from './ContentPageContext';

export interface JokeProps {
  context: ContentPageContext;
}

export const Joke = JSX<JokeProps>(
  props => {
    const { context } = props;

    const chuckJoke = useChuckJoke(context.useAsyncData);

    return () => (
      <section>
        <div>Random Chuck Norris joke:</div>
        <div>{chuckJoke.data.value?.value}</div>
      </section>
    );
  },
  ['context']
);

type ChuckJoke = {
  value?: string;
};

const useChuckJoke = (useAsyncData: AsyncDataHook) => {
  const { data, error } = useAsyncData(chuckJokeUrl, fethcChuckJoke);

  return { data: data || { value: {} }, error: error || { value: {} } };
};

const chuckJokeUrl = 'https://api.chucknorris.io/jokes/random';

const fethcChuckJoke = async (): Promise<ChuckJoke> => {
  const response = await fetch(chuckJokeUrl);
  return await response.json();
};
