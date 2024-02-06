import styled from "@emotion/styled"

const SpanLinkStyled = styled.span`
text-decoration: underline;
color: white;
cursor: pointer;
`


export const SpanLink = ({onCLick, children}) => {
  return (
    <SpanLinkStyled onCLick={onCLick}>{children}</SpanLinkStyled>
  )
}
