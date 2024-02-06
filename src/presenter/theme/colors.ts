import { palette } from "./palette";

export const darkColors = {
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
};

export const lightColors: typeof darkColors = {
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
};
