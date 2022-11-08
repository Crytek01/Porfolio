import React, { Fragment, FunctionComponent } from 'react';
import { Container } from '@common/components/containers/container/container.styled';
import { NavBar } from '@common/components/nav-bar/nav-bar.component';

import { AnimatedFooter, FooterText, Header } from './standart.layout.styled';

interface IStandartLayout {
  children: React.ReactNode;
}

export const StandartLayout: FunctionComponent<IStandartLayout> = ({
  children,
}) => {
  return (
    <Fragment>
      <Header>
        <NavBar />
      </Header>

      <main>{children}</main>

      <footer>
        <Container>
          <FooterText>&copy; 2022 Erick Badilla</FooterText>
        </Container>
      </footer>
    </Fragment>
  );
};
