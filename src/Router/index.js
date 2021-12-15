import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Results from '../components/Results';

import NotFound from '../views/NotFound';

const Router = ({ darkTheme, setDarkTheme }) => {
  const list = [
    { path: '/search' },
    { path: '/images' },
    { path: '/news' },
    { path: '/videos' },
  ];

  return (
    <BrowserRouter>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        {list.map((item, index) => {
          return (
            <Route
              key={`${index}${item.path}`}
              path={item.path}
              element={<Results />}
            />
          );
        })}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
