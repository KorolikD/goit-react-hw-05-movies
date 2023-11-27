import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavList,
  NavigateLink,
  Header,
  Container,
} from './SharedLayout.styled';
import { MaimLoader } from 'components';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavList>
              <li>
                <NavigateLink to={'/'}>Home</NavigateLink>
              </li>
              <li>
                <NavigateLink to={'/movies'}>Movies</NavigateLink>
              </li>
            </NavList>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<MaimLoader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
