import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";


const H2Styles = styled.h1`
  margin: ${({margin}) => margin ? margin : 0};
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  /* -webkit-text-stroke: 1px #35363a; */

`

export const H2Form = ({children, margin}) => {
    const { theme } = useTheme()
  return (
    <H2Styles margin={margin} theme={theme}>{children}</H2Styles>
  )
}