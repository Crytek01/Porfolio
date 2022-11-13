import { FunctionComponent } from 'react';

import { Spin } from './spinner.styles';

interface ISpinner {
  size: number;
  isRunning?: boolean;
  className?: string;
}

export const Spinner: FunctionComponent<ISpinner> = ({
  size,
  isRunning = true,
  className,
}) => <Spin size={size} isRunning={isRunning} className={className} />;
