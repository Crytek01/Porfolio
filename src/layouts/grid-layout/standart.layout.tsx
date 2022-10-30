import React, { Fragment, FunctionComponent } from 'react';
import { Container } from '../../components/common/container/container.styled';
import { NavBar } from '../../components/common/nav-bar/nav-bar.component';
import { Footer, Header } from './standart.layout.styled';

interface IStandartLayout {
  children: React.ReactNode;
}

export const StandartLayout: FunctionComponent<IStandartLayout> = ({
  children,
}) => (
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
