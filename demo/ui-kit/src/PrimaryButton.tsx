import { JSX } from '@redneckz/uni-jsx';

export interface PrimaryButtonProps {
  onClick?: (ev: string) => void;
}

export const PrimaryButton = JSX<PrimaryButtonProps>(({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick('CustomEvent');
  };
  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
});
