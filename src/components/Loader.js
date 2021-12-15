import React from 'react';
import Spinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <Spinner type="Puff" color="#00BFFF" width={80} height={550} />
    </div>
  );
};

export default Loader;
