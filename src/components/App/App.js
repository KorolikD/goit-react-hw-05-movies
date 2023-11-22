import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <nav></nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
};
