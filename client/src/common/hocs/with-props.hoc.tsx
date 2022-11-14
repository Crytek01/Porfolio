import { FunctionComponent } from 'react';

export const withProps =
  <P extends object>(
    Component: React.ComponentType<P>,
    passedProps: P
  ): FunctionComponent<P> =>
  ({ ...props }) =>
    <Component {...passedProps} {...props} />;
