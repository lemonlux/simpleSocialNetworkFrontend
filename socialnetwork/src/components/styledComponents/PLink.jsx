import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const PLinkStyles = styled.p`
color: ${({ theme })=> theme.palette.color.enhance};
text-decoration: underline;
margin: ${({margin}) => margin ? margin : 0};
cursor: pointer;
`




export const PLink = ({children, margin, onClick}) => {
  const theme = useTheme();
  return (
    <PLinkStyles theme={theme} margin={margin} onClick={onClick} >{children}</PLinkStyles>
  )
}
