import React from 'react';
import { createContext, useContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
 
  const [theme, setTheme] = useState("dark");


  const value = useMemo(
    () => ({
      theme,
      setTheme,
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
