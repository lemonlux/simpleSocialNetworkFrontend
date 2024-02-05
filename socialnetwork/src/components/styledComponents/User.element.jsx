import styled from "@emotion/styled"

const UserElementStyled = styled.div`

display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: auto;
  cursor: pointer;

  & p {
    font-weight: 300;
    margin: 0;
    padding: 0 16px 0 0;
  }
  & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  & h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }



`

export const UserElement = ({children}) => {
  return (
    <UserElementStyled>{children}</UserElementStyled>
  )
}
