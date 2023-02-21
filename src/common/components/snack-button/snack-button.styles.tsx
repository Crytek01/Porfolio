import styled, { css } from 'styled-components';

interface ISnackContainer {
  isMenuOpen: boolean;
}

const openCSS = css`
  box-shadow: inset 0 0 0 1px #333;
`;

const notOpenCSS = css`
  box-shadow: none;
`;

export const SnackContainer = styled.button<ISnackContainer>`
  border: none;
  border-radius: 10%;

  background-color: inherit;

  transition: all 0.3s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${openCSS}
    }
  }

  ${({ isMenuOpen }) => (isMenuOpen ? openCSS : notOpenCSS)};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  position: relative;
`;

export const SnackBarIcon = styled.svg``;
