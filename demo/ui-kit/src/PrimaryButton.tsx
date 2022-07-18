import { JSX } from '@redneckz/uni-jsx';

export interface PrimaryButtonProps {
  onClick?: (ev: string) => void;
}

export const PrimaryButton = JSX<PrimaryButtonProps>(
  props => {
    const handleClick = () => {
      if (props.onClick) props.onClick('CustomEvent');
    };
    return () => (
      <button className="button" onClick={handleClick}>
        {props.children}
      </button>
    );
  },
  ['onClick']
);
