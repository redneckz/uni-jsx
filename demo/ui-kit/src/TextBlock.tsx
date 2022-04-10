import { JSX } from '@redneckz/uni-jsx';

export interface TextBlockProps {
  primary?: string;
  secondary?: string;
  dark?: boolean;
  onCite?: (ev: PointerEvent) => void;
}

const baseStyle = {
  cursor: 'pointer'
};

export const TextBlock = JSX<TextBlockProps>(props => {
  const { primary, secondary, dark, onCite, children } = props;
  const style = Object.assign({}, baseStyle, dark ? { color: '#CCC', backgroundColor: '#777' } : {});
  return (
    <section className="text-block__root" style={style} onClick={onCite}>
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
      {children && <p>{children}</p>}
    </section>
  );
});
