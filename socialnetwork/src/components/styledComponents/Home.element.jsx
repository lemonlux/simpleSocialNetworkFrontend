import styled from "@emotion/styled"

const HomeStyled = styled.div`
width: 100vw;
display: flex;
flex-direction: row;



`

export const HomeElement = ({children}) => {
  return (
    <HomeStyled>{children}</HomeStyled>
  )
}
