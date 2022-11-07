import styled from 'styled-components';

import { ExternalLink } from '../../common/components/external-link/external-link.comonent';
import { Tag } from '../../common/components/tag/tag.component';
import { Typography } from '../../common/components/typography/typography.component';

const tableQuery = '(max-width: 31.5em)';
const mobileQuery = '(max-width: 28em)';
const smallMobileQuery = '(max-width: 22em)';

export const Title = styled(Typography).attrs({
  forwardedAs: 'h2',
  size: 'h2',
  weight: 'semiBold',
})`
  @media ${tableQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[5]};
  }

  @media ${mobileQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[4]};
  }

  @media ${smallMobileQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[3]};
  }
`;

export const SubTitle = styled(Typography).attrs({
  forwardedAs: 'h3',
  size: 'h3',
  weight: 'medium',
})`
  @media ${tableQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[2]};
  }
  @media ${mobileQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[2]};
  }
  @media ${smallMobileQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[1]};
  }
`;

export const Text = styled(Typography).attrs({
  forwardedAs: 'p',
  size: 'b3',
  weight: 'regular',
  lineHeight: 1.6,
  color: 'lightGrey',
})`
  @media ${tableQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[2]};
  }
  @media ${mobileQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[1]};
  }

  @media ${smallMobileQuery} {
    font-size: ${({ theme: { fontSize } }) => fontSize[0]};
  }
`;

export const RecomendationContainer = styled.div`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing[3]};
  align-items: center;
`;

export const CVTag = styled(Tag)`
  opacity: 0.85;
  font-size: ${({ theme: { fontSize } }) => fontSize[0]};
`;

export const DownloadLink = styled(ExternalLink)`
  font-size: ${({ theme: { fontSize } }) => fontSize[0]};
`;
