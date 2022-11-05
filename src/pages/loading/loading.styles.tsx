import styled from 'styled-components';

import { Spin } from '../../common/components/spinner/spinner.styles';

interface ISpinner {
  top: number;
}

export const SpinnerContainer = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;
`;

export const Spinner = styled(Spin)<ISpinner>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: 50%;
  transform: translateX(-50%);
`;
