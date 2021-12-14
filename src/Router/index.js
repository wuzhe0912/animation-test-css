import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import NotFound from '../views/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">Home</Route>
        <Route path="/image">Image</Route>
        <Route element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
