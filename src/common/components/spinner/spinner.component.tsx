import { FunctionComponent } from 'react';

import { Spin } from './spinner.styles';

interface ISpinner {
  size: number;
  isRunning?: boolean;
}

export const Spinner: FunctionComponent<ISpinner> = ({
  size,
  isRunning = true,
}) => <Spin size={size} isRunning={isRunning} />;
