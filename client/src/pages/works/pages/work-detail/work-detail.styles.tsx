import styled, { css } from 'styled-components';

import { ArticleContainer } from '../../../../common/components/containers/article/article.component';
import { Typography } from '../../../../common/components/typography/typography.component';

export const Article = styled(ArticleContainer)`
  margin: 0 auto;
  max-width: 50rem;
`;

export const ImageContainer = styled.picture`
  display: flex;
  justify-content: center;
  width: clamp(15rem, 100%, 50rem);
  height: auto;
`;

const imageDefaultStyles = css`
  border-radius: 11px;
  width: 100%;
  height: 100%;
`;

export const LogoImage = styled.img`
  ${imageDefaultStyles}
`;

export const PreviewImage = styled.img`
  ${imageDefaultStyles}
`;

export const Description = styled(Typography).attrs({
  size: 'b3',
  lineHeight: 1.6,
  align: 'justify',
})`
  letter-spacing: -0.04rem;
`;

export const KeyPointsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const KeyPoint = styled.li`
  list-style: none;

  display: flex;

  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-width: 27rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { spacing } }) => spacing[3]};
  }
`;

export const Point = styled(Typography).attrs({
  size: 'b3',
})`
  letter-spacing: -0.04rem;
`;

export const PreviewTitle = styled(Typography).attrs({
  size: 'h4',
  forwardedAs: 'h4',
  weight: 'semiBold',
})``;
