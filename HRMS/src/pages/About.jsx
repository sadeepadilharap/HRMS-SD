// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-light-primary dark:text-dark-primary">About Page</h1>
      <p className="mt-4 text-light-secondary dark:text-dark-secondary">
        This is the about page. Switch between day and night mode using the button.
      </p>
    </div>
  );
};

export default About;
