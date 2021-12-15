import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
      <p className="text-2xl">{currentYear}, PittWu.</p>
    </footer>
  );
};

export default Footer;
