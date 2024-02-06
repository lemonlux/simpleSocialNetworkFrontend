import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const MobileHeaderStyled = styled.div`

width: 100vw;
height: 9vh;
border-top: 1px solid ${({theme})=> theme.palette.border.main};
position: fixed;
bottom: 0%;
z-index: 100;
display: flex;
flex-direction: row;
justify-content: space-around;

`

export const MobileHeader = ({children}) => {
    const theme = useTheme();
  return (
    <MobileHeaderStyled theme={theme}>{children}</MobileHeaderStyled>
  )
}
