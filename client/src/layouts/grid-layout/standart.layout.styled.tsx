import { Typography } from '@common/components/typography/typography.component';
import { withStandartAnimation } from '@common/hocs/standart-animation.hoc';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: ${({ theme: { spacing } }) => spacing[8]};

  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: center;

  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: #fff;
`;

export const FooterText = styled(Typography).attrs({
  size: 'b5',
  color: 'lightGrey',
  align: 'center',
})``;
