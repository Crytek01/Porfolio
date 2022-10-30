import { FunctionComponent, useState } from 'react';
import { useMediaQuery } from '../../../hooks/media-query/use-media-query.hook';
import { ClickOutside } from '../click-outside/click-outside.component';
import { PopMenu } from '../pop-menu/pop-menu.component';
import {
  CvIcon,
  ExternalLink,
  GithubIcon,
  Item,
  LinkedinIcon,
  List,
  NavContainer,
  PorfolioName,
  RouterLink,
  SnackBarIcon,
  SnackContainer,
  WorksIcon,
} from './nav-bar.styled';

export const NavBar: FunctionComponent = () => {
  const isMobile = useMediaQuery('screen and (max-width:44em)');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <NavContainer>
      <RouterLink to="/">
        <PorfolioName>Erick Badilla Portfolio</PorfolioName>
      </RouterLink>

      {!isMobile && (
        <List>
          <Item>
            <RouterLink to="/works">
              <WorksIcon />
              <span>Works</span>
            </RouterLink>
          </Item>

          <Item>
            <RouterLink to="/cv">
              <CvIcon />
              <span>CV</span>
            </RouterLink>
          </Item>

          <Item>
            <ExternalLink
              target="_blank"
              href="https://github.com/Crytek01?tab=repositories&q=&type=public&language=&sort="
            >
              <GithubIcon />
              <span>Github</span>
            </ExternalLink>
          </Item>

          <Item>
            <ExternalLink
              target="_blank"
              href="https://www.linkedin.com/in/erick-badilla-70b787210/"
            >
              <LinkedinIcon />
              <span>Linkedin</span>
            </ExternalLink>
          </Item>
        </List>
      )}

      {isMobile && (
        <ClickOutside
          onClickOutside={() => {
            setIsMenuOpen(false);
          }}
        >
          <SnackContainer
            onClick={() => {
              setIsMenuOpen((isOpen) => !isOpen);
            }}
          >
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
              onItemClick={() => {
                setIsMenuOpen(false);
              }}
              options={[{ name: 'Works', route: '/works' }]}
            />
          </SnackContainer>
        </ClickOutside>
      )}
    </NavContainer>
  );
};
