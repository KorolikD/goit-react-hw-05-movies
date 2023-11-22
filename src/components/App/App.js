import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from 'pages';
import {
  getMovieCredits,
  getMovieDetails,
  getTrendingMovie,
} from 'helpers/api';

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
        <Route path="/movies" element={<Home />} />
      </Routes>
    </>
  );
};

const trendingMovies = async () => {
  try {
    const response = await getMovieCredits(555);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

trendingMovies();
