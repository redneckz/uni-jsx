import { JSX } from '@redneckz/uni-jsx';

export interface TextBlockProps {
  primary?: string;
  secondary?: string;
  children?: unknown;
  onCite?: (ev: PointerEvent) => void;
}

export const TextBlock = JSX(({ primary, secondary, children, onCite }: TextBlockProps) => {
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
