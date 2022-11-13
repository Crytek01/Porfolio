import { FunctionComponent } from 'react';
import { theme } from '@infrastructure/theme';

import { StyledTag } from './tag.styles';

export interface ITag {
  textColor?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

export const Tag: FunctionComponent<ITag> = ({
  textColor = theme.colors.text.boldGrey,
  backgroundColor = theme.colors.backgroudColors.lightGreen,
  children,
}) => (
  <StyledTag textColor={textColor} backgroundColor={backgroundColor}>
    {children}
  </StyledTag>
);
