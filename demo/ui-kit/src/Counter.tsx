import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from './ContentPageContext';

export interface CounterProps {
  context: ContentPageContext;
}

export const Counter = JSX<CounterProps>(
  props => {
    const { context } = props;

    const count = context.useState(0);

    function handleClick() {
      count.value++;
    }

    return () => (
      <section>
        <div>{count.value}</div>
        <button className="button" onClick={handleClick}>
          Increment
        </button>
      </section>
    );
  },
  ['context']
);
