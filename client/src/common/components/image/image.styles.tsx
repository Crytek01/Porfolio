import styled from 'styled-components';

import { Spinner as SpinIcon } from '../spinner/spinner.component';

interface IImage {
  isVisible: boolean;
}

export const ImageContainer = styled.div`
  position: relative;
`;

interface IImage {
  isVisible: boolean;
}

export const Img = styled.img<IImage>`
  width: 100%;
  height: 100%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const Spinner = styled(SpinIcon)`
  position: absolute;

  left: 50%;
  top: 30%;

  transform: translate(-50%, -50%);
`;
