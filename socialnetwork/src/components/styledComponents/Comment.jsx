import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const CommentStyled = styled.form`
 display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: auto;
  cursor: pointer;

& textarea{
    background-color: ${({theme})=> theme.palette.background.main};
    font-family: Onest;
    font-size: 20px;
    width: 100%;
    border: none;

}

& h4 {
    color: ${({theme})=> theme.palette.color.diminishing};
    margin: 0;
    font-size: 16px;
    font-weight: 300;
  }

  & span{
    text-decoration: underline;
    color: ${({theme})=> theme.palette.color.enhance};
  }

& img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
  }

`




export const Comment = ({children, onSubmit}) => {
    const theme = useTheme();
  return (
    <CommentStyled theme={theme} onSubmit={onSubmit}>{children}</CommentStyled>
  )
}
