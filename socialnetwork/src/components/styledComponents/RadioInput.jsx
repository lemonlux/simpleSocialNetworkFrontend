import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const RadioInputStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: ${({ margin }) => (margin ? margin : 0)};
  width: 70%;
  gap: 2px;

  & label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    min-width: ${({ minW }) => (minW ? minW : "45%")};
    height: 30px;
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.palette.color.enhance};
    border-radius: 3px;
    transition: background-color 0.3s ease, border-radius 0.3s ease, border 0.3s ease;
  }
 
  & input[type="radio"] {
    display: none;
  }

  & input[type="radio"]:checked + label {
    background-color: ${({ theme }) => theme.palette.color.enhance};
    border-radius: "2px";
    border: 2px solid ${({ theme }) => theme.palette.color.enhance};
  }
`;

export const RadioInput = ({ children, margin, minW, onClick }) => {
  const { theme } = useTheme();

  return <RadioInputStyles margin={margin} theme={theme} minW={minW} onClick={onClick}>{children}</RadioInputStyles>;
};
