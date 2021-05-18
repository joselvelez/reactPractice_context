/*
  Custom component to manage interanal state,
  relevent theme information, and styling
*/

import React, { useContext, useState } from 'react';

// create a new react context for theme
const ThemeContext = React.createContext();

// create a new react context for toggling the provider
const ThemeUpdateContext = React.createContext();

// custom hook to allow us to use useContext() inside of our component
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {

  // create a state variable for the theme
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }
  
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}