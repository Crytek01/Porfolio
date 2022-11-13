import styled from 'styled-components';

export const ArticleContainer = styled.article`
  padding: ${({ theme: { spacing } }) => spacing[6]} 0
    ${({ theme: { spacing } }) => spacing[10]} 0;
`;
