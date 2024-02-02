import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const AnchorStyles = styled.p`
color: ${({ theme })=> theme.palette.color.enhance};
text-decoration: underline;
margin: ${({margin}) => margin ? margin : 0};

`




export const Anchor = ({children, margin, onClick}) => {
  const theme = useTheme();
  return (
    <AnchorStyles theme={theme} margin={margin} onClick={onClick} >{children}</AnchorStyles>
  )
}
