import { FunctionComponent } from 'react';

import { ArticleContainer } from './article.styles';

interface IArticle {
  children: React.ReactNode;
}

export const Article: FunctionComponent<IArticle> = ({ children }) => (
  <ArticleContainer>{children}</ArticleContainer>
);
