import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const SmallStyles = styled.small`
font-size: 12px;
text-align: center;
color: ${({ theme }) => theme.palette.color.diminishing};

`



export const Small = ({children}) => {
  const { theme } = useTheme();
  return (
    <SmallStyles theme={theme}>{children}</SmallStyles>
  )
}
