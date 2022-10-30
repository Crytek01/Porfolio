import styled, { css } from 'styled-components';

const hideElementCSS = css`
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
`;

interface IPopMenuContainer {
  backgroundColor?: string;
  isVisible: boolean;
}

export const PopMenuContainer = styled.ul<IPopMenuContainer>`
  transition: all 0.8s ease-in;

  background-color: ${({ backgroundColor = '#888' }) => backgroundColor};
  list-style: none;

  box-shadow: inset 0 0.8rem 4.8rem rgb(0 0 0 / 3%);

  overflow: hidden;

  border-radius: 9px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: start;

  position: absolute;
  top: 50px;
  right: 10px;

  z-index: 999;

  width: 20rem;

  padding: 1.2rem 0;

  ${({ isVisible }) => (isVisible ? null : hideElementCSS)}
`;

export const MenuItem = styled.li`
  display: block;
  font-size: 1.6rem;
  padding: 0 2rem;

  &:focus {
    box-shadow: 0 0 0 0.4rem rgba(0, 204, 255, 0.5);
  }
`;
