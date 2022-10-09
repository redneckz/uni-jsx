import { JSX } from '@redneckz/uni-jsx';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';

export interface PrimaryButtonProps {
  onClick?: (ev: string) => void;
}

export const PrimaryButton = JSX<PrimaryButtonProps>(props => {
  const handleClick = useCallback(() => {
    props.onClick && props.onClick('CustomEvent');
  }, [props.onClick]);

  return (
    <button className="button" onClick={handleClick}>
      {props.children}
    </button>
  );
});
