import styled from 'styled-components';

import { ITag } from './tag.component';

export const StyledTag = styled.span<ITag>`
  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  font-size: ${({ theme: { fontSize } }) => fontSize[1]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semibold};

  display: inline-block;
  text-align: center;

  padding: 0.25rem 0.5rem;

  text-transform: uppercase;
`;
