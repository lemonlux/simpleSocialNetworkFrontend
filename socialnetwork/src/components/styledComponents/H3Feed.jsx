import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const H3FeedStyled = styled.h3`

color: ${({variant, theme}) => variant == "focus" ? theme.palette.color.main: theme.palette.color.diminishing };


margin : 0;
    font-weight: 500;
    text-decoration: ${({variant, theme}) => variant == "focus" ? `4px underline ${theme.palette.color.enhance}` : "none" };
    text-underline-offset: 15px;

`

export const H3Feed = ({children, variant}) => {
    const { theme } = useTheme();
  return (
    <H3FeedStyled theme={theme} variant={variant} >{children}</H3FeedStyled>
  )
}
