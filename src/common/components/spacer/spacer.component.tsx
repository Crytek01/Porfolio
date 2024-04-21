import { FunctionComponent } from 'react';

import { Space } from './spacer.styles';

const POSITION_VARIANTS = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
} as const;

interface ISpacer {
  position?: keyof typeof POSITION_VARIANTS;
  size?: number;
  children?: React.ReactNode;
}

export const Spacer: FunctionComponent<ISpacer> = ({
  position = 'bottom',
  size = 4,
  children,
}) => (
  <Space position={POSITION_VARIANTS[position]} size={size}>
    {children}
  </Space>
);
