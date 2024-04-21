import styled from 'styled-components';

import { Spinner as SpinIcon } from '../spinner/spinner.component';

export const ImageContainer = styled.div`
  position: relative;
`;

interface IImage {
  $isVisible: boolean;
  $scaleOnHover: boolean;
  $scaleModifier: number;
}

export const Img = styled.img<IImage>`
  width: 100%;
  height: 100%;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  position: absolute;
  transition: transform 0.4s ease-in-out;

  ${({ $scaleOnHover, $scaleModifier }) =>
    $scaleOnHover
      ? `
      &:hover {
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        transform: scale(${$scaleModifier});
        box-shadow: 0 0 0 0.4rem rgba(0, 204, 255, 0.5);
      }`
      : ''};
`;

export const Spinner = styled(SpinIcon)`
  position: absolute;

  left: 50%;
  top: 30%;

  transform: translate(-50%, -50%);
`;
