// src/components/TopBar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import { Link } from 'react-router-dom';

const TopBar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-black text-black dark:text-white shadow-md">
      <nav>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
      <button 
        className="bg-light-accent dark:bg-dark-accent text-white px-4 py-2 rounded"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Day Mode' : 'Night Mode'}
      </button>
    </header>
  );
};

export default TopBar;
