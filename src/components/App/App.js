import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink />
          </li>
          <li>
            <NavLink />
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home</h1>
            </div>
          }
        />
        <Route
          path="/movies"
          element={
            <div>
              <h1>Movies</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
};
