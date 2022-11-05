import { FunctionComponent } from 'react';

import {
  MenuItem,
  PopLink,
  PopLinkName,
  PopMenuContainer,
} from './pop-menu.styles';

export interface IMenuOptions {
  name: string;
  route: string;
}

interface IPopMenu {
  isMenuOpen: boolean;
  onItemClick: () => void;
  menuColor?: string;
  menuFontColor?: string;
  options: readonly IMenuOptions[];
}

export const PopMenu: FunctionComponent<IPopMenu> = ({
  isMenuOpen,
  onItemClick,
  menuColor,
  options,
}) => (
  <PopMenuContainer
    backgroundColor={menuColor}
    onClick={(e) => e.stopPropagation()}
    isVisible={isMenuOpen}
  >
    {options.map(({ route, name }) => (
      <MenuItem key={route}>
        <PopLink to={route} onClick={onItemClick}>
          <PopLinkName>{name}</PopLinkName>
        </PopLink>
      </MenuItem>
    ))}
  </PopMenuContainer>
);
