import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const IndividualPostStyled = styled.div`
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
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
  }

  & h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }

  .bi:hover {
    cursor: pointer;
  }

  .bi-heart-fill {
    color: #f9197f;
  }
  .bi-heart:hover {
    color: #f9197f;
  }

  .bi-bookmark:hover {
    color: ${({theme})=> theme.palette.color.enhance}
  }

  .bi-bookmark-fill {
    color: ${({theme})=> theme.palette.color.enhance}
  }
`;

export const IndividualPostElement = ({ children, onClick }) => {
  const theme = useTheme();
  return <IndividualPostStyled theme={theme} onClick={onClick}>{children}</IndividualPostStyled>;
};
