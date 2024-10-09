// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';  // Import your custom theme
import Login from './pages/Login'; // Example of using the theme
import Dashboard from './pages/Dashboard'; // Example of using the theme
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'; // Import Layout

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Login route without Layout */}
          <Route path='/login' element={<Login/>} />
          
          {/* Dashboard route with Layout */}
          <Route 
            path='/dashboard' 
            element={
              <Layout 
                isSidebarExpanded={isSidebarExpanded} 
                toggleSidebar={toggleSidebar}
              >
                <div className={`${isSidebarExpanded ? 'ml-6' : 'ml-6'} transition-all duration-300`}>
                  <Dashboard />
                </div>
              </Layout>
            } 
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
