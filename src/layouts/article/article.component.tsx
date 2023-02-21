import { FunctionComponent } from 'react';

import { ArticleContainer } from './article.styles';

interface IArticle {
  children: React.ReactNode;
  className?: string;
}

export const Article: FunctionComponent<IArticle> = ({
  children,
  className,
}) => <ArticleContainer className={className}>{children}</ArticleContainer>;
