import styled from 'styled-components';

import { spacing } from '../../../infrastructure/theme/spacing';

interface ISpace {
  position: string;
  size: number;
}

const getStyle = (position: string, size: number): string =>
  `${position}: ${spacing[size]}`;

export const Space = styled.div<ISpace>`
  ${({ position, size }) => getStyle(position, size)}
`;
