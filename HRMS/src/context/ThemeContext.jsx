// src/context/ThemeContext.js
import { createContext, useState, useEffect } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with localStorage (Optional, but persists the user's preference)
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
      // Apply dark class based on saved preference
      document.documentElement.classList.add(savedTheme === 'true' ? 'dark' : '');
    }
  }, []);

  // Toggle theme mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev); // Toggle the state
    if (!isDarkMode) {
      document.documentElement.classList.add('dark'); // Add dark class
      localStorage.setItem('isDarkMode', true); // Persist choice
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark class
      localStorage.setItem('isDarkMode', false); // Persist choice
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
