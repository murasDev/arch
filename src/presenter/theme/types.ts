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

export type ThemeColors = {
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
  xxl: number;
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

export type ThemePalette = {
  purple: string;
  white: string;
  black: string;
  midBlack: string;
  darkGray: string;
  midGray: string;
  lightGray: string;
  lightGray01: string;
  red01: string;
  yellow: string;
  successGreen: string;
};
export interface Theme extends BaseTheme {
  colors: ThemeColors;
  activeOpacity: number;
  fonts: ThemeFontsProps;
  spacing: ThemeSpacingTypes;
  borderRadii: ThemeBorderTypes;
  buttonVariants: BoxVariantsProps;
  cardVariants: BoxVariantsProps;
  textVariants: TextVariantsType;
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
