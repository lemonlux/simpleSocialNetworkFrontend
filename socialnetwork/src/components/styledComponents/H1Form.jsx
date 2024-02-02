import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";


const H1Styles = styled.h1`
  margin: ${({margin}) => margin ? margin : 0};
  font-size: 4.5rem;
  text-align: center;
  /* -webkit-text-stroke: 1px #35363a; */

`

export const H1Form = ({children, margin}) => {
    const { theme } = useTheme()
  return (
    <H1Styles margin={margin} theme={theme}>{children}</H1Styles>
  )
}