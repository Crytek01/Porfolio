import styled from 'styled-components';

import {
  styleSize,
  Typography,
} from '../../common/components/typography/typography.component';

export const Title = styled(Typography).attrs({
  size: 'h1',
  forwardedAs: 'h1',
  weight: 'bold',
})`
  @media (max-width: 33em) {
    font-size: ${styleSize.h2};
  }

  @media (max-width: 19em) {
    font-size: ${styleSize.h3};
  }
`;

export const DeveloperRoles = styled(Typography).attrs({
  size: 'b3',
})`
  @media (max-width: 33em) {
    font-size: ${styleSize.b4};
    line-height: 1.4;
  }

  @media (max-width: 19em) {
    font-size: ${styleSize.b5};
  }
`;

export const SectionTitle = styled(Typography).attrs({
  size: 'h2',
  weight: 'semiBold',
})`
  display: inline-block;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.text.lightGrey};

  @media (max-width: 33em) {
    font-size: ${styleSize.h3};
  }

  @media (max-width: 19em) {
    font-size: ${styleSize.h4};
  }
`;

export const SectionText = styled(Typography).attrs({
  size: 'b3',
  lineHeight: 1.6,
})`
  @media (max-width: 33em) {
    font-size: ${styleSize.b4};
    line-height: 1.4;
  }

  @media (max-width: 19em) {
    font-size: ${styleSize.b5};
  }
`;

export const BiographyTextContainer = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const BiographyList = styled.ul`
  display: flex;

  flex-direction: column;

  justify-content: center;
`;

export const BiographyItem = styled.li`
  display: flex;
  align-items: flex-start;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const BiographyBoldText = styled(Typography).attrs({
  forwardedAs: 'span',
  size: 'b4',
  weight: 'bold',
  lineHeight: 1.7,
})`
  margin-right: 1.4rem;

  @media (max-width: 33em) {
    font-size: ${styleSize.b5};
    line-height: 1.4;
  }

  @media (max-width: 19em) {
    font-size: ${styleSize.b6};
  }
`;
