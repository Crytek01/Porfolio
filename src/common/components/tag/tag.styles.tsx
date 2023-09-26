import styled from 'styled-components';


export interface ITagStyle {
  $textColor?: string;
  $backgroundColor?: string;
}

export const StyledTag = styled.span<ITagStyle>`
  color: ${({ $textColor }) => $textColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  font-size: ${({ theme: { fontSize } }) => fontSize[1]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semibold};

  display: inline-block;
  text-align: center;

  padding: 0.25rem 0.5rem;

  text-transform: uppercase;
`;
