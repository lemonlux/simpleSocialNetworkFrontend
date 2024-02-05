import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({justifyContent}) => (justifyContent ? justifyContent : "center")};;
  align-items:  ${({alignItems}) => (alignItems ? alignItems: "center")};
  text-align: justify;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "no-wrap")};
  gap: ${({ gap }) => (gap ? gap : "4px")};
  margin: ${({ margin}) => (margin ? margin : "4px")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  height: ${({ height }) => (height ? height : "auto")};
  min-height: ${({ minHeight }) => (minHeight && minHeight)};
  width: ${({ width }) => (width ? width : "auto")};
  position: ${({position})=> position ? position : null };


`;

export const FlexDir = ({
  children,
  direction,
  gap,
  height,
  width,
  minHeight,
  margin,
  padding,
  wrap,
  justifyContent,
  onClick,
  alignItems,
  position,
className
}) => {
  const { theme } = useTheme();

  return (
    <FlexStyle
      wrap={wrap}
      theme={theme}
      minHeight={minHeight}
      position={position}
      padding={padding}
      width={width}
      height={height}
      gap={gap}
      onClick={onClick}
      margin={margin}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      className={className}
    >
      {children}
    </FlexStyle>
  );
};
