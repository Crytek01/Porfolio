import { FunctionComponent } from 'react';

import { ExternalLink, RouterLink } from './custom-link.styles';

export interface ICustomLinkOptions {
  target?: '_self' | '_blank';
  activeColor?: string;
  color?: string;
}

interface ILink {
  to?: string;
  isExternal?: boolean;
  isHoverBoxEnabled?: boolean;
  onClick?: () => void;
  options?: ICustomLinkOptions;
  children: React.ReactNode;
  className?: string;
}

const DEFAULT_OPTIONS = {
  target: '_self',
  color: '#1976d2',
  activeColor: '#6e9cf8;',
};

export const CustomLink: FunctionComponent<ILink> = ({
  isExternal = false,
  isHoverBoxEnabled = true,
  options = {},
  children,
  className,
  to = '#',
  onClick,
}) => {
  const standardOptions = { ...DEFAULT_OPTIONS, ...options };

  const { activeColor, color, ...currentOptions } = standardOptions;

  return isExternal ? (
    <ExternalLink
      className={className}
      href={to}
      onClick={onClick}
      $isHoverBoxEnabled={isHoverBoxEnabled}
      $color={color}
      $activeColor={activeColor}
      {...currentOptions}
    >
      {children}
    </ExternalLink>
  ) : (
    <RouterLink
      className={className}
      to={to}
      onClick={onClick}
      $color={color}
      $activeColor={activeColor}
      $isHoverBoxEnabled={isHoverBoxEnabled}
    >
      {children}
    </RouterLink>
  );
};
