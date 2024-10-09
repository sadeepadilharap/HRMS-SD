// src/theme.js
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#15B392', // Light green
    },
    secondary: {
      main: '#73EC8B', // Medium green
    },
    accent: {
      main: '#54C392', // Darker green (used as accent)
    },
    background: {
      default: '#FFFFFF', // Light background
    },
    text: {
      primary: '#2B2E4A', // Dark text color
    },
  },
});

export default theme;
