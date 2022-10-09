import { JSX } from '@redneckz/uni-jsx';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';
import { ContentPageContext } from './ContentPageContext';

export interface LinkButtonProps {
  context: ContentPageContext;
  url?: string;
}

export const LinkButton = JSX<LinkButtonProps>(props => {
  const { context, url } = props;

  const router = context.useRouter();
  console.log(router);

  const handleClick = useCallback(() => {
    router.push(url || 'test');
  }, [url]);

  return (
    <button className="button" onClick={handleClick}>
      {props.children}
    </button>
  );
});
