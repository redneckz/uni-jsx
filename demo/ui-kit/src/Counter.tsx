import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';

export const Counter = JSX(() => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(_ => _ + 1);
  }, []);

  return (
    <section>
      <div>{count}</div>
      <button className="button" onClick={handleClick}>
        Increment
      </button>
    </section>
  );
});
