import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const PostPopupStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color:rgba(186, 213, 227, 0.24)
; /* Adjust the alpha value for transparency */
  z-index: 999;

  & p {
    margin: 0;
  }

  #uniqueDiv {
    width: 650px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: black;
    border-radius: 5px;
   
    border-radius: 25px;

    h1 {
    
    margin: 5px 0 20px 0;
      
    }
  }

  form {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    border-radius: 10px;
    height: 80%;
  }

  textarea {
    background-color: ${({theme})=> theme.palette.background.main};
    font-family: Onest;
    font-size: 20px;
    width: 100%;
    border: none;
    height: 100%;
    border: black 2px solid;
    border-radius: 10px;
  }
`;
export const PostPopupElement = ({ children, buttonWidth }) => {
  return (
    <PostPopupStyled buttonWidth={buttonWidth}>
      {children}
    </PostPopupStyled>
  );
};
