import { FunctionComponent } from 'react';

import { Space } from './spacer.styles';

const positionsVariant = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
};

interface ISpacer {
  position?: keyof typeof positionsVariant;
  size?: number;
  children?: React.ReactNode;
}

export const Spacer: FunctionComponent<ISpacer> = ({
  position = 'bottom',
  size = 4,
  children,
}) => (
  <Space position={positionsVariant[position]} size={size}>
    {children}
  </Space>
);
