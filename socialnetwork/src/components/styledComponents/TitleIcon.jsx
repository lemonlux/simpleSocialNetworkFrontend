import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const TitleIconStyled = styled.div`

display: flex;
gap: 24px;

padding: 8px 24px 4px 16px;

 :hover{
    background-color: ${({ theme }) => theme.palette.background.light};
    border-radius: 25px;
    cursor: pointer;
}


& i {
    font-size: 28px;
}

& h2{
    font-size: 24px;
    margin: 0;
    font-weight: ${({variant}) => variant == "focus" ? 600 : 300};

}



`

export const TitleIcon = ({children, onClick, variant}) => {
    const { theme } = useTheme();
  return (
    <TitleIconStyled theme={theme} onClick={onClick} variant={variant}>{children}</TitleIconStyled>
  )
}
