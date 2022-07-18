import { JSX } from '@redneckz/uni-jsx';

export interface TextBlockProps {
  primary?: string;
  secondary?: string[];
  dark?: boolean;
  onCite?: (ev: PointerEvent) => void;
}

const baseStyle = {
  cursor: 'pointer'
};

export const TextBlock = JSX<TextBlockProps>(
  props => () => {
    const style = Object.assign({}, baseStyle, props.dark ? { color: '#CCC', backgroundColor: '#777' } : {});
    return (
      <section className="text-block__root" style={style} onClick={props.onCite}>
        {props.primary && (
          <p className="text-block__primary">
            <em>{props.primary}</em>
          </p>
        )}
        {props.secondary && <pre className="text-block__secondary">{props.secondary?.join('\n')}</pre>}
        {props.children && <p>{props.children}</p>}
      </section>
    );
  },
  ['dark', 'primary', 'secondary', 'onCite']
);
