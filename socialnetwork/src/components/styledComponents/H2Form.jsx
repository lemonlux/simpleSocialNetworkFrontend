import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";


const H2Styles = styled.h1`
  margin: ${({margin}) => margin ? margin : 0};
  font-size: ${({fontSize})=> fontSize ? fontSize : "2rem"} ;
  font-weight: 400;
  text-align: start;
  color: ${({color}) => color && color };
  /* -webkit-text-stroke: 1px #35363a; */

`

export const H2Form = ({children, margin, color, fontSize}) => {
    const { theme } = useTheme()
  return (
    <H2Styles margin={margin} color={color} theme={theme} fontSize={fontSize}>{children}</H2Styles>
  )
}