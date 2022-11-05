import React, { Fragment, FunctionComponent } from 'react';

import { Container } from '../../common/components/containers/container/container.styled';
import { NavBar } from '../../common/components/nav-bar/nav-bar.component';

import { Footer, Header } from './standart.layout.styled';

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

      <Footer>
        <Container>
          <p>&copy; 2022 Erick Badilla</p>
        </Container>
      </Footer>
    </Fragment>
  );
};
