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

  #uniqueDiv {
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Additional styling for the content inside the overlay */
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
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  textarea {
    color: black;
    font-size: 28px;
    font-family: Onest;
    width: 100%;
    height: 60%;
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
