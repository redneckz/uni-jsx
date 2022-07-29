import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from './ContentPageContext';

export interface LinkButtonProps {
  context: ContentPageContext;
  url?: string;
}

export const LinkButton = JSX<LinkButtonProps>(
  props => {
    const { context, url } = props;

    const router = context.useRouter();
    console.log(router);

    const handleClick = () => {
      router.push(url || 'test');
    };

    return () => (
      <button className="button" onClick={handleClick}>
        {props.children}
      </button>
    );
  },
  ['context', 'url']
);
