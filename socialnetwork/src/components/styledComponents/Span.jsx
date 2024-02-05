import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const SpanStyled = styled.span`
color: ${({ theme}) => theme.palette.color.diminishing };


`


export const Span = ({children}) => {
    const { theme } = useTheme();
  return (
    <SpanStyled theme={theme}>{children}</SpanStyled>
  )
}
