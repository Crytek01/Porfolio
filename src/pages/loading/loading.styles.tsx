import { Spinner as SpinIcon } from '@common/components/spinner/spinner.component';
import styled from 'styled-components';

interface ISpinner {
  top: number;
}

export const SpinnerContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;
`;

export const Spinner = styled(SpinIcon)<ISpinner>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: 50%;
  transform: translateX(-50%);
`;
