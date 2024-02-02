import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const DivLineStyled=styled.div`
       height: 100vh;
    width: 1.5px;
    background-color: ${({ theme }) => theme.palette.color.diminishing};



`
export const DivLine = () => {
    const { theme } = useTheme();
  return (
    <DivLineStyled theme={theme}></DivLineStyled>
  )
}
