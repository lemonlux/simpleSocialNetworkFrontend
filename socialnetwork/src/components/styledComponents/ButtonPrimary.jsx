import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonStyles = styled.button`
  background-color: ${({ variant, theme }) =>
    variant == "normal"
      ? theme.palette.color.enhance
      : variant == "delete"
      ? "white"
      : variant == "inverted"
      ? "white"
      : variant == "loading"
      ? theme.palette.color.darker
      : variant == "unfollow"
      ? theme.palette.background.main
      : variant == "follow" && "white"};
  color: ${({ variant, theme }) =>
    variant == "normal"
      ? "white"
      : variant == "delete"
      ? "red"
      : variant == "inverted"
      ? theme.palette.color.darker
      : variant == "loading"
      ? theme.palette.color.darker
      : variant == "unfollow"
      ? "white"
      : variant == "follow" && theme.palette.background.main};
  border-radius: 25px;
  border: ${({ variant }) =>
    variant == "unfollow" ? "1px solid white" : variant == "follow" && "none"};
  font-weight: 600;
  font-size: ${({ variant }) =>
    variant == "unfollow" || variant == "follow" ? "16px" : "20px"};
  text-align: center;
  margin: ${({ margin, theme }) => (margin ? margin : "4px")};
  height: ${({ height }) => (height ? height : "38px")};
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
      height={height}
      variant={variant}
      onClick={onClick}
      margin={margin}
    >
      {children}
    </ButtonStyles>
  );
};
