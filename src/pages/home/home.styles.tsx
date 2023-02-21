import {
  styleSize,
  Typography,
} from '@common/components/typography/typography.component';
import { styledWithProps } from '@common/utils/styled-components/styled-components.util';
import styled from 'styled-components';

export const Title = styledWithProps(Typography, {
  size: 'h1',
  as: 'h1',
  weight: 'bold',
})`
  @media (max-width: 33em) {
    font-size: ${styleSize.h2};
  }

  @media (max-width: 19em) {
    font-size: ${styleSize.h3};
  }
`;

export const DeveloperRoles = styledWithProps(Typography, {
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

export const SectionTitle = styledWithProps(Typography, {
  size: 'h2',
  weight: 'semiBold',
  lineHeight: 1.3,
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

export const SectionText = styledWithProps(Typography, {
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

export const BiographyBoldText = styledWithProps(Typography, {
  as: 'span',
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
