import { spacing } from "./utils";

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};


const PALETTE_COLOR_DARK = {
  background:  "#0a0a0a",
  lighterBackground: "#252529",
  color:  "#f0f0f2",
  diminishing: "#74787d",
  secondColor: "#1C9BEF",
  darkerColor: "#2094e3",
  button:  "#fff",
  border:  "#2E3336",
  search: "#212327",
};

export const themeDark = {
  palette: {
    background: {
      main: PALETTE_COLOR_DARK.background,
      light: PALETTE_COLOR_DARK.lighterBackground,
      dark: PALETTE_COLOR_DARK.background,
    },
    color: {
      main: PALETTE_COLOR_DARK.color,
      enhance: PALETTE_COLOR_DARK.secondColor,
      darker: PALETTE_COLOR_DARK.darkerColor,
      diminishing: PALETTE_COLOR_DARK.diminishing,
      search:PALETTE_COLOR_DARK.search,
    },
    button: {
      main: PALETTE_COLOR_DARK.button,
    },
    border: {
      main: PALETTE_COLOR_DARK.border,

    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  spacing
};
