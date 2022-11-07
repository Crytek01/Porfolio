import styled from 'styled-components';

export const ExternalLink = styled.a`
  &:visited,
  &:link {
    color: #1976d2;

    text-decoration: none;
    cursor: pointer;
  }

  &:hover,
  &:active {
    color: #6e9cf8;
  }
`;
