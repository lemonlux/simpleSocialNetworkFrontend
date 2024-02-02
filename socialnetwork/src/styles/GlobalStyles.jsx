import { Global } from "@emotion/react";


export const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          "*": {
           
            boxSizing: "border-box",
            color: theme.palette.color.main,
          },
          "html,body": {
            height: "100vh",
            fontFamily: 'Onest',
            width: "100vw",
            background: theme.palette.background.main,
            padding: 0,
            margin: 0,
          },
          ".navLink": {
            textDecoration: "none",
          },
        }
        
      ]}
    />
  );
};
