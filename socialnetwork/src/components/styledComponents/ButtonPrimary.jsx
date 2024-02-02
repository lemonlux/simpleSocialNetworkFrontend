import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonStyles = styled.button`
  background-color: ${({ variant, theme }) =>
    variant == "normal"
      ? theme.palette.color.enhance :
      variant == "delete" ?
      "white" :
      variant == "inverted" ? "white"
      : variant == "loading" && theme.palette.color.darker};
  color:${({ variant, theme }) =>
    variant == "normal"
      ? "white" :
      
      variant == "delete" ? "red" :
      variant == "inverted" && theme.palette.color.darker
      };
  border-radius: 25px;
  border: none;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin: ${({ margin, theme }) => (margin ? margin : "4px")};
  height: ${({height}) => height ? height : "38px"};
  width: ${({ width }) => width};
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
 







`;

export const ButtonPrimary = ({
  children,
  width,
  variant,
  onClick,
  margin,
  height,
}) => {
  const theme = useTheme();
  return (
    <ButtonStyles
      theme={theme}
      width={width}
      variant={variant}
      onClick={onClick}
      margin={margin}
    >
      {children}
    </ButtonStyles>
  );
};
