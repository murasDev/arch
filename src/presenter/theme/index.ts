import { getScaledSize, getVerticalScale } from "@/utils/sizes";
import { createTheme } from "@shopify/restyle";
import { darkColors, lightColors } from "./colors";
import { fontSizes, fonts } from "./fonts";
import { buttonVariants } from "./variants/buttonVariants";
import { cardsVariants } from "./variants/cardsVariants";
import { textVariants } from "./variants/textVariants";

const theme = createTheme({
  colors: lightColors,
  activeOpacity: 0.8,
  fonts: fonts,
  fontSizes: fontSizes,
  borderRadii: {
    none: 0,
    s: getScaledSize(4),
    m: getScaledSize(10),
    l: getScaledSize(25),
    xl: getScaledSize(75),
  },
  spacing: {
    none: 0,
    s: getVerticalScale(8),
    m: getVerticalScale(14),
    l: getVerticalScale(16),
    xl: getVerticalScale(24),
    xxl: getVerticalScale(40),
  },
  buttonVariants: buttonVariants,
  textVariants: textVariants,
  cardVariants: cardsVariants,
});

export type AppTheme = typeof theme;

const darkTheme = {
  ...theme,
  colors: darkColors,
};

export { darkTheme, theme };
