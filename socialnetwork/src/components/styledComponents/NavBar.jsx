import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const NavBarStyled = styled.nav`
min-width: 100%;
height: 7vh;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

& h2{
  margin: 0;
}

& div{
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    background-color: ${({ theme }) => theme.palette.background.light};
    cursor: pointer;
}
}


`





export const NavBar = ({children}) => {
  const { theme } = useTheme();
  return (
    <NavBarStyled theme={theme} >{children}</NavBarStyled>
  )
}
