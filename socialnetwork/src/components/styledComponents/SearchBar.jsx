import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const SearchBarStyled = styled.div`
height: 8vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

& div{
    background-color: ${({theme})=> theme.palette.color.search};
    border: ${({theme})=> theme.palette.color.search} solid 2px; 
    border-radius: 20px;
    width: 90%;
    gap: 4px;
}


& input{
    padding: 0 12px 0 12px;
    font-size: 15px;
background-color: ${({theme})=> theme.palette.color.search};
border: ${({theme})=> theme.palette.color.search} solid 2px; 
border-radius: 20px;
height: 5vh;
width: 92%

}
`

export const SearchBar = ({children}) => {
    const { theme } = useTheme();
  return (
    <SearchBarStyled theme={theme}>{children}</SearchBarStyled>
  )
}
