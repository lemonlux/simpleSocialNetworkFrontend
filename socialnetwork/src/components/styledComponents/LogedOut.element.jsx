import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const LogedOutStyled = styled.main`
 width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .logo{
    width: 20vw;
}


`

export const LogedOutElement = ({children}) => {

  return (
    <LogedOutStyled >{children}</LogedOutStyled>
  )
}
