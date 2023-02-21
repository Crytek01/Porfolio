import { FunctionComponent } from 'react';

import { Spinner, SpinnerContainer } from './loading.styles';

interface ILoadingPage {
  size: number;
  positionTopPercentage?: number;
}

export const LoadingPage: FunctionComponent<ILoadingPage> = ({
  size,
  positionTopPercentage = 50,
}) => (
  <SpinnerContainer>
    <Spinner size={size} top={positionTopPercentage} isRunning={true} />
  </SpinnerContainer>
);
