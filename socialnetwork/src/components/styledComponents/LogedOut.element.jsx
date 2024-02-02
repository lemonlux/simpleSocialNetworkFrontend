import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const LogedOutStyled = styled.main`
 width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .logo{
    width: 20vw;
}

.divLine{
    height: 100vh;
    width: 1px;
    background-color: ${({ theme }) => theme.palette.color.diminishing};
}
`

export const LogedOutElement = ({children}) => {
    const { theme } = useTheme();
  return (
    <LogedOutStyled theme={theme}>{children}</LogedOutStyled>
  )
}
