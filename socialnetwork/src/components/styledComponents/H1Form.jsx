import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";


const H1Styles = styled.h1`
  margin: ${({margin}) => margin ? margin : 0};
  font-size: ${({fontSize})=> fontSize ? fontSize :  "4.5rem"};
  text-align: center;
  color: ${({color}) => color && color };
  text-align: start;
  /* -webkit-text-stroke: 1px #35363a; */

`

export const H1Form = ({children, margin, color, fontSize}) => {
    const { theme } = useTheme()
  return (
    <H1Styles margin={margin} theme={theme} color={color} fontSize={fontSize}>{children}</H1Styles>
  )
}