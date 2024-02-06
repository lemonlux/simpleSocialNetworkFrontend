import { ThemeProvider } from '@emotion/react';

import { Outlet } from "react-router-dom";
import { GlobalStyles } from './styles/GlobalStyles';
import { createTheme } from './styles/utils';
import { themeDark } from './styles/theme';

const App = () => {

  return (
    <>
     <ThemeProvider
        theme={createTheme(themeDark)} >
    <GlobalStyles/>
      <Outlet/>
     </ThemeProvider>
    </>
  )
}

export default App
