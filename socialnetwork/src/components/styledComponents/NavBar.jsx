import styled from "@emotion/styled"

const NavBarStyled = styled.nav`
width: 100%;
height: 5vh;
display: flex;
flex-direction: column;

`





export const NavBar = ({children}) => {
  return (
    <NavBarStyled>{children}</NavBarStyled>
  )
}
