// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15B392',      // Light green
        secondary: '#73EC8B',    // Medium green
        accent: '#54C392',       // Darker green
        accentDarker: '#D2FF72', // Even darker green
        background: '#FFFFFF',    // Light background
        text: '#2B2E4A',         // Dark text color
      },
    },
  },
  plugins: [],
}
