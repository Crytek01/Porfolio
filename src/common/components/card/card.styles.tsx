import { withProps } from '@common/hocs/with-props.hoc';
import styled from 'styled-components';

import { Image } from '../image/image.component';
import { Typography } from '../typography/typography.component';

export const CardContainer = styled.div`
  border-radius: 6px 6px 3px 3px;

  border: 1px solid #e9e9e9;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  width: 24rem;
  min-height: 28rem;

  transition: all 0.4s;
  backface-visibility: hidden;
  perspective: 1px;
  -webkit-font-smoothing: subpixel-antialiased;

  box-shadow: 0 1px 1rem rgb(0 0 0 / 1%);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 4.8rem rgb(0 0 0 / 3%);
  }

  &:active {
    box-shadow: 0 0.8rem 4.8rem rgb(0 0 0 / 10%);
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 13.6rem;

  background-size: cover;

  opacity: 95%;
`;

export const TextContainer = styled.div`
  padding: 1rem 2rem;
`;

export const CardTitle = withProps(Typography, {
  as: 'h3',
  size: 'h3',
  weight: 'medium',
  align: 'center',
  color: 'lightGrey',
});

export const CardDescription = withProps(Typography, {
  size: 'b4',
  align: 'center',
  lineHeight: 1.4,
});
