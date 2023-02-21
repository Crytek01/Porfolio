import { withProps } from '@common/hocs/with-props.hoc';
import styled from 'styled-components';

export const styledWithProps = <P extends object>(
  Component: React.ComponentType<P>,
  props: P
) => styled(withProps(Component, props));
