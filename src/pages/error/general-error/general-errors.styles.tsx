import styled from 'styled-components';

import { ReactComponent as ErrorSVG } from '../../../assets/icons/plugs-connection-outline-svg.svg';

export const GeneralErrorContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImage = styled(ErrorSVG)`
  display: block;
  width: clamp(15rem, 100%, 25rem);
  height: clamp(15rem, 100%, 25rem);

  fill: #333;
`;

export const Title = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize[8]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semibold};
  line-height: 1.2;

  margin-bottom: ${({ theme: { spacing } }) => spacing[9]};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize[5]};
  line-height: 1.2;
  margin-bottom: 16rem;
  color: #777;
`;
