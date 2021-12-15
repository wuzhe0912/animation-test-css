import React, { useState } from 'react';
import Routes from './Router';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Routes darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
    </div>
  );
}

export default App;
