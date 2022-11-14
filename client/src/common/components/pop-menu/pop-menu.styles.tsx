import { CustomLink } from '@common/components/custom-link/custom-link.component';
import styled, { css } from 'styled-components';

import { styleSize, Typography } from '../typography/typography.component';

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
  transition: all 0.3s ease-in;

  background-color: ${({ backgroundColor = '#fff' }) => backgroundColor};
  border: 1px solid #333;
  list-style: none;

  box-shadow: inset 0 0.8rem 4.8rem rgb(0 0 0 / 3%);

  overflow: hidden;

  border-radius: 9px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: start;

  position: absolute;
  top: 55px;
  right: 10px;

  width: 20rem;

  padding: 0.2rem 0;

  ${({ isVisible }) => (isVisible ? null : hideElementCSS)}
`;

export const MenuItem = styled.li`
  display: block;
  font-size: ${({ theme: { fontSize } }) => fontSize[3]};
  padding: 0.5rem 1rem;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid #d3d3d3;
  }

  &:focus {
    box-shadow: 0 0 0 0.4rem rgba(0, 204, 255, 0.5);
  }
`;

export const PopLink = styled(CustomLink)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: ${({ theme: { spacing } }) => spacing[1]};

  padding: 1rem;
`;

export const PopLinkName = styled(Typography).attrs({
  size: 'b3',
  color: 'semiBoldGrey',
  weight: 'medium',
  align: 'left',
})`
  @media (max-width: 19em) {
    font-size: ${styleSize.b4};
  }
`;
