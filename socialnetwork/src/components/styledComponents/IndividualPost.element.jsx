import styled from "@emotion/styled"

const IndividualPostStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 0;
width: 100%;
height: auto;


& p{
  font-weight: 300;
  margin: 0;
  padding: 0 16px 0 0;
}
& img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

& h4{
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.bi:hover{
  cursor: pointer;
}




.bi-heart-fill{
  color: #F9197F;

}
.bi-heart:hover{
  color: #F9197F;
}

.bi-bookmark:hover{
    color: #1D9BF0;
  }


.bi-bookmark-fill{
  color: #1D9BF0;

}


`

export const IndividualPostElement = ({children}) => {
  return (
    <IndividualPostStyled>{children}</IndividualPostStyled>
  )
}
