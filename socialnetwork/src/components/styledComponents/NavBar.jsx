import styled from "@emotion/styled"

const NavBarStyled = styled.nav`
min-width: 100%;
height: 5vh;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;


& h3 {
    margin : 0;
} 

`





export const NavBar = ({children}) => {
  return (
    <NavBarStyled>{children}</NavBarStyled>
  )
}
