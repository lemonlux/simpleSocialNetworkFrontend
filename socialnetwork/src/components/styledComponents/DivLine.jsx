import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const DivLineStyled=styled.div`


       height: ${({variant})=> variant == "H" ? "1px" : variant == "V" && "100vh" } ;
    width: ${({variant})=> variant == "H" ? "100%" : variant == "V" && "1px" };
    background-color: ${({ theme }) => theme.palette.border.main};



`
export const DivLine = ({variant}) => {
    const { theme } = useTheme();
  return (
    <DivLineStyled variant={variant} theme={theme}></DivLineStyled>
  )
}
