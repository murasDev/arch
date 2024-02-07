import { ThemeColors, ThemePalette } from "./types";

export const darkColors = (palette: ThemePalette): ThemeColors => ({
  mainBackground: palette.black,
  mainForeground: palette.yellow,

  primaryCardBackground: palette.midBlack,
  secondaryCardBackground: palette.yellow,

  primaryCardText: palette.lightGray,
  secondaryCardText: palette.white,
  primaryCardBorderColor: palette.lightGray01,

  success: palette.successGreen,
  error: palette.red01,
  white: palette.white,
  transparent: "transparent",
});

export const lightColors = (palette: ThemePalette): ThemeColors => ({
  mainBackground: palette.lightGray,
  mainForeground: palette.yellow,

  primaryCardBackground: palette.purple,
  secondaryCardBackground: palette.white,
  primaryCardText: palette.white,
  secondaryCardText: palette.black,
  primaryCardBorderColor: palette.lightGray01,

  success: palette.successGreen,
  error: palette.red01,
  white: palette.white,
  transparent: "transparent",
});
