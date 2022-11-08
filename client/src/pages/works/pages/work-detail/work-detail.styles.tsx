import { ArticleContainer } from '@common/components/containers/article/article.component';
import { Image } from '@common/components/image/image.component';
import {
  styleSize,
  Typography,
} from '@common/components/typography/typography.component';
import styled, { css } from 'styled-components';

const tabletBreakpoint = '(max-width: 30em)';
const mobileBreakpoint = '(max-width: 27em)';

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
`;

export const LogoImage = styled(Image)`
  ${imageDefaultStyles}
  height: 33.1rem;
`;

export const PreviewImage = styled(Image)`
  ${imageDefaultStyles}
  height: 45.1rem;
`;

export const Description = styled(Typography).attrs({
  size: 'b3',
  lineHeight: 1.5,
  align: 'justify',
})`
  letter-spacing: -0.04rem;

  @media ${tabletBreakpoint} {
    font-size: ${styleSize.b4};
  }

  @media ${mobileBreakpoint} {
    font-size: ${styleSize.b5};
  }
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

  @media ${mobileBreakpoint} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { spacing } }) => spacing[3]};
  }
`;

export const Point = styled(Typography).attrs({
  size: 'b4',
})`
  @media ${tabletBreakpoint} {
    font-size: ${styleSize.b5};
    padding: ${({ theme: { spacing } }) => spacing[1]};
  }
`;

export const PreviewTitle = styled(Typography).attrs({
  size: 'h4',
  forwardedAs: 'h4',
  weight: 'semiBold',
})`
  padding: ${({ theme: { spacing } }) => spacing[0]};
`;
