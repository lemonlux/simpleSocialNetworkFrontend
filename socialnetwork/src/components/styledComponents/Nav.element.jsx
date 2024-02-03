import styled from "@emotion/styled"

const NavStyled= styled.nav`
gap: 16px;
height: 100vh;
width: 25vw;
display: flex;
flex-direction: column;
align-items: start;
justify-content:center;

padding: 0 0 0 6vw;



`




export const NavElement = ({children}) => {
  return (
    <NavStyled>{children}</NavStyled>
  )
}
