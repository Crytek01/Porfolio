import { FunctionComponent } from 'react';

import { ClickOutside } from '../click-outside/click-outside.component';
import { IMenuOptions, PopMenu } from '../pop-menu/pop-menu.component';

import { SnackBarIcon, SnackContainer } from './snack-button.styles';

interface ISnackButton {
  onClickOutside: () => void;
  onMenuItemClick: () => void;
  onSnackClick: () => void;
  isMenuOpen: boolean;
  menuOptions: readonly IMenuOptions[];
}

export const SnackButton: FunctionComponent<ISnackButton> = ({
  isMenuOpen,
  onMenuItemClick,
  onSnackClick,
  onClickOutside,
  menuOptions,
}) => {
  return (
    <ClickOutside onClickOutside={onClickOutside}>
      <SnackContainer onClick={onSnackClick} aria-label="Guide">
        <SnackBarIcon viewBox="0 0 10 8" width="35">
          <path
            d="M1 1h8M1 4h 8M1 7h8"
            stroke="#000"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </SnackBarIcon>

        <PopMenu
          isMenuOpen={isMenuOpen}
          onItemClick={onMenuItemClick}
          options={menuOptions}
        />
      </SnackContainer>
    </ClickOutside>
  );
};
