import styled from 'styled-components';

interface ITag {
  textColor?: string;
  backgroundColor?: string;
}

export const Tag = styled.span<ITag>`
  color: #333;
  background-color: #c6f6d5;

  font-size: 1.2rem;
  font-weight: 600;

  display: inline-block;
  text-align: center;

  padding: 0.25rem 0.5rem;

  text-transform: uppercase;
`;
