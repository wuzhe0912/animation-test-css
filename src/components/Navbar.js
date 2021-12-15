import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center">
        <Link to="/">
          <p className="text-2xl bg-blue-500">Logo</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
