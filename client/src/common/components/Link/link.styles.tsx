import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ILink {
  color: string;
  activeColor: string;
  isHoverBoxEnabled: boolean;
}

const DefaultLinkStyles = css`
  display: inline-block;
  &:link,
  &:visited {
    text-decoration: none;
    color: #1976d2;
    cursor: pointer;

    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: #6e9cf8;
    outline: none;
  }
`;

export const RouterLink = styled(Link)<ILink>`
  ${DefaultLinkStyles}

  &:link,
  &:visited {
    color: ${({ color }) => color};
  }

  &:hover,
  &:active {
    color: ${({ activeColor }) => activeColor};
    box-shadow: ${({ isHoverBoxEnabled }) =>
      isHoverBoxEnabled ? '0 0 0 0.4rem rgba(0, 204, 255, 0.5)' : 'none'};
  }
`;

export const ExternalLink = styled.a<ILink>`
  ${DefaultLinkStyles}

  &:link,
  &:visited {
    color: ${({ color }) => color};
  }

  &:hover,
  &:active {
    color: ${({ activeColor }) => activeColor};
    box-shadow: ${({ isHoverBoxEnabled }) =>
      isHoverBoxEnabled ? '0 0 0 0.4rem rgba(0, 204, 255, 0.5)' : 'none'};
  }
`;
