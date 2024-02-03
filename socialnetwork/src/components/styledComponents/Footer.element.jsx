import styled from "@emotion/styled";


const FooterStyled = styled.footer`
height: 100vh;
width: 25vw;



`



export const FooterElement = ({children}) => {
  return (
    <FooterStyled>{children}</FooterStyled>
  )
}
