import { FunctionComponent } from 'react';
import { RouterLink } from '../nav-bar/nav-bar.styled';
import { MenuItem, PopMenuContainer } from './pop-menu.styles';

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
  menuFontColor,
  options,
}) => (
  <PopMenuContainer
    backgroundColor={menuColor}
    onClick={(e) => e.stopPropagation()}
    isVisible={isMenuOpen}
  >
    {options.map(({ route, name }) => (
      <MenuItem key={route}>
        <RouterLink to={route} onClick={onItemClick}>
          {name}
        </RouterLink>
      </MenuItem>
    ))}
  </PopMenuContainer>
);
