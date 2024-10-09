// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';  // Import your custom theme
import Login from './pages/Login'; // Example of using the theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />  {/* Your components will now use the custom theme */}
    </ThemeProvider>
  );
}

export default App;
