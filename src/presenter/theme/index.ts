import { createTheme } from "@shopify/restyle";
import { darkColors, lightColors } from "./colors";
import { fonts } from "./fonts";
import { Theme, ThemeConfigResponse } from "./types";
import { buttonVariants } from "./variants/buttonVariants";
import { cardsVariants } from "./variants/cardsVariants";
import { textVariants } from "./variants/textVariants";

let theme: Theme;
let darkTheme: Theme;

export function createAppTheme(appTheme: ThemeConfigResponse) {
  theme = createTheme<Theme>({
    colors: lightColors(appTheme.palette),
    spacing: appTheme.spacing,
    sizes: appTheme.sizes,
    borderRadii: appTheme.borderRadii,
    activeOpacity: appTheme.activeOpacity,
    fonts: fonts,
    buttonVariants: buttonVariants,
    textVariants: textVariants,
    cardVariants: cardsVariants,
  });

  darkTheme = {
    ...theme,
    colors: darkColors(appTheme.palette),
  };
}

export { darkTheme, theme };
