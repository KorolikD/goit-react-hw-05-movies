import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLinc } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <StyledLinc to={'/'}>Home</StyledLinc>
            </li>
            <li>
              <StyledLinc to={'/movies'}>Movies</StyledLinc>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
