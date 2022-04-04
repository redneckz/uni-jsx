import { JSX } from '@redneckz/uni-jsx';

export interface PrimaryButtonProps {
  children?: unknown;
  onClick?: (ev: string) => void;
}

export const PrimaryButton = JSX(({ children, onClick }: PrimaryButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick('CustomEvent');
  };
  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
});
