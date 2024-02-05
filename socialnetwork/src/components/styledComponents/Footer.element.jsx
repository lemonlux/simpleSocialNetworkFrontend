import styled from "@emotion/styled";


const FooterStyled = styled.footer`
height: 100vh;
width: 25vw;
display: flex;
align-items: center;
justify-content: start;
flex-direction: column;
padding: 20px 0;

& .footerDiv {
  background-color: #1D1F23;
  border-radius: 20px;

}

& .terms{
  font-size: 12px;
  font-weight: 300;
  color: #74787d;
  cursor: pointer;

}

`



export const FooterElement = ({children}) => {
  return (
    <FooterStyled>{children}</FooterStyled>
  )
}
