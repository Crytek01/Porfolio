import { FunctionComponent } from 'react';

import { ExternalLink, RouterLink } from './link.styles';

interface ILinkOptions {
  target?: '_self' | '_blank';
  activeColor?: string;
  color?: string;
}

interface ILink {
  to?: string;
  isExternal?: boolean;
  isHoverBoxEnabled?: boolean;
  onClick?: () => void;
  options?: ILinkOptions;
  children: React.ReactNode;
  className?: string;
}

const DEFAULT_OPTIONS = {
  target: '_self',
  color: '#1976d2',
  activeColor: '#6e9cf8;',
};

export const Link: FunctionComponent<ILink> = ({
  isExternal = false,
  isHoverBoxEnabled = true,
  options = {},
  children,
  className,
  to = '#',
  onClick,
}) => {
  const currentOptions = { ...DEFAULT_OPTIONS, ...options };

  return isExternal ? (
    <ExternalLink
      className={className}
      href={to}
      onClick={onClick}
      isHoverBoxEnabled={isHoverBoxEnabled}
      {...currentOptions}
    >
      {children}
    </ExternalLink>
  ) : (
    <RouterLink
      className={className}
      to={to}
      onClick={onClick}
      color={currentOptions.color}
      activeColor={currentOptions.activeColor}
      isHoverBoxEnabled={isHoverBoxEnabled}
    >
      {children}
    </RouterLink>
  );
};
