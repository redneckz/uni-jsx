import { JSX } from '@redneckz/uni-jsx';

export interface TextBlockProps {
  primary?: string;
  secondary?: string;
  onCite?: (ev: PointerEvent) => void;
}

export const TextBlock = JSX<TextBlockProps>(({ primary, secondary, onCite, children }) => {
  return (
    <section className="text-block__root">
      {primary && (
        <p className="text-block__primary">
          <em>{primary}</em>
        </p>
      )}
      {secondary && (
        <p>
          <q className="text-block__secondary">{secondary}</q>
        </p>
      )}
      {children && (
        <p>
          <a href="#" onClick={onCite}>{children}</a>
        </p>
      )}
    </section>
  );
});