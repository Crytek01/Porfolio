import styled from 'styled-components';

interface ITag {
  textColor?: string;
  backgroundColor?: string;
}

export const Tag = styled.span<ITag>`
  color: #333;
  background-color: #c6f6d5;

  font-size: ${({ theme: { fontSize } }) => fontSize[1]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semibold};

  display: inline-block;
  text-align: center;

  padding: 0.25rem 0.5rem;

  text-transform: uppercase;
`;
