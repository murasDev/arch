import {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  BaseTheme,
  BorderProps,
  ColorProps,
  LayoutProps,
  OpacityProps,
  ShadowProps,
  SpacingProps,
  TypographyProps,
} from "@shopify/restyle";

type ThemeColors = {
  mainBackground: string;
  mainForeground: string;

  primaryCardBackground: string;
  secondaryCardBackground: string;

  primaryCardText: string;
  secondaryCardText: string;
  primaryCardBorderColor: string;

  success: string;
  error: string;
  white: string;
  transparent: string;
};

export type ThemeSizesTypes = {
  none: number;
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type ThemeSpacingTypes = {
  none: number;
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type ThemeBorderTypes = {
  none: number;
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type ThemeFontsProps = {
  regular: string;
  bold: string;
  semiBold: string;
};

export interface Theme extends BaseTheme {
  colors: ThemeColors;
  activeOpacity: number;
  fonts: ThemeFontsProps;
  sizes: ThemeSizesTypes;
  spacing: ThemeSpacingTypes;
  borderRadii: ThemeBorderTypes;
  buttonVariants?: BoxVariantsProps;
  cardVariants?: BoxVariantsProps;
  textVariants?: TextVariantsType;
}

export type TextVariantsType = {
  [key: string]: TypographyProps<Theme> & ColorProps<Theme>;
};

export type BoxVariantsProps = {
  [key: string]: BackgroundColorProps<Theme> &
    BackgroundColorShorthandProps<Theme> &
    LayoutProps<Theme> &
    SpacingProps<Theme> &
    OpacityProps<Theme> &
    BorderProps<Theme> &
    ShadowProps<Theme>;
};
