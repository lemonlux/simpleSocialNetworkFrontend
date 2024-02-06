import React from 'react';
import { createContext, useContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
 
  const [theme, setTheme] = useState("dark");

  const isMobile = window.innerWidth < 576 ? true : false 

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      isMobile
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeApp = () => {
  return useContext(ThemeContext);
};
