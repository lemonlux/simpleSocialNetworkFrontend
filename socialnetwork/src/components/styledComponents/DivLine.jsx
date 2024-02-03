import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const DivLineStyled=styled.div`


       height: ${({variant})=> variant == "H" ? "1.5px" : variant == "V" && "100vh" } ;
    width: ${({variant})=> variant == "H" ? "100%" : variant == "V" && "1.5px" };
    background-color: ${({ theme }) => theme.palette.color.diminishing};



`
export const DivLine = ({variant}) => {
    const { theme } = useTheme();
  return (
    <DivLineStyled variant={variant} theme={theme}></DivLineStyled>
  )
}
