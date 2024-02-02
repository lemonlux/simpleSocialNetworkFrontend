import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const FormStyle = styled.form`
display: flex;

  padding: ${({ padding }) => padding ? padding : "8px"};
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : "fit-content")};
  /* & input {
    height: 4px;
  } */

`;

export const Form = ({
  children,
  width,
  height,
  onSubmit,
  padding
}) => {
  const { theme } = useTheme();

  return (
    <FormStyle
      theme={theme}
      width={width}
      height={height}
      onSubmit={onSubmit}
      padding={padding}
    >
      {children}
    </FormStyle>
  );
};
