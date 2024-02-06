import { createTheme } from "@shopify/restyle";
import { darkColors, lightColors } from "./colors";
import { fonts } from "./fonts";
import { buttonVariants } from "./variants/buttonVariants";
import { cardsVariants } from "./variants/cardsVariants";
import { textVariants } from "./variants/textVariants";

const theme = createTheme({
  colors: lightColors,
  activeOpacity: 0.8,
  fonts: fonts,
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  sizes: {
    none: 0,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  spacing: {
    none: 0,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  buttonVariants: buttonVariants,
  textVariants: textVariants,
  cardVariants: cardsVariants,
});

const darkTheme: Theme = {
  ...theme,
  colors: darkColors,
};

export type Theme = typeof theme;
export type ThemeColors = typeof darkColors;
export type SpacingTheme = keyof Theme["spacing"];
export type BorderRadiiTheme = keyof Theme["borderRadii"];
export type SizesTheme = keyof Theme["sizes"];
export { darkTheme, theme };
