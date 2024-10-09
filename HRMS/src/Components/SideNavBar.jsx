// src/components/SideNavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <div className="bg-white dark:bg-black h-screen p-5 shadow-md w-64">
      <h2 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="block p-2 text-light-secondary dark:text-dark-secondary hover:bg-light-accent dark:hover:bg-dark-accent rounded">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/about" className="block p-2 text-light-secondary dark:text-dark-secondary hover:bg-light-accent dark:hover:bg-dark-accent rounded">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
