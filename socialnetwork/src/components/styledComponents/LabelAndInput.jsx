import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const LabelAndInputStyle = styled.div`

margin: ${({margin})=> margin ? margin : "0"};
display: flex;
    flex-direction: column;
    align-items: ${({alignItems}) => alignItems ? alignItems : "flex-start"} ;
    justify-content: center;
width: ${({parentWidth}) => parentWidth ? parentWidth : '70%'};
gap: ${({ gap }) => (gap ? gap : null)};
& input{
  width: 100%;
  height: ${({inputHeight}) => inputHeight ? inputHeight: 'auto'};
  flex-wrap: wrap;
  font-size: 16px;
  color: black;
}

& textarea{
  width: 100%;
  height: ${({inputHeight}) => inputHeight ? inputHeight: 'auto'};
  color: black;

}




`

export const LabelAndInput = ({children, alignItems, parentWidth, inputHeight, gap, margin}) => {
  const { theme } = useTheme()
  return (
    <LabelAndInputStyle theme={theme} alignItems={alignItems} margin={margin} parentWidth={parentWidth} gap={gap} inputHeight={inputHeight}>{children}</LabelAndInputStyle>
  )
}
