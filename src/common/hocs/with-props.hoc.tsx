import { FunctionComponent } from 'react';

export const withProps = <P extends object>(
  Component: React.ComponentType<P>,
  passedProps: P,
): FunctionComponent<P> => {
  return ({ ...props }: P) => {
    return <Component {...passedProps} {...props} />;
  };
};

    
