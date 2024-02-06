import { BaseTheme, BoxProps, TextProps } from "@shopify/restyle";

type Testando = {
  name: string;
  age: number;
};

interface TestandoGeneric<T extends Testando> {}

interface Teste extends OverrideTeste<Testando, { age: string }> {}

interface TestandoTudo {
  teste: TestandoGeneric<Teste>;
}

type OverrideTeste<T extends Testando, Overrides extends Partial<Testando>> = {
  [K in keyof T]: K extends keyof Overrides ? Overrides[K] : T[K];
};

export type SizesThemePropsType = "s" | "m" | "l" | "xl" | "none";
export type BorderRadiiThemePropsType = "s" | "m" | "l" | "xl" | "none";
export type SpacingThemePropsSize = "s" | "m" | "l" | "xl" | "none";

export interface Theme extends BaseTheme {
  sizes: { [key: string]: number };
  activeOpacity: number;
  buttonVariants: ThemedVariantsBoxProps;
  textVariants: ThemedVariantsTextProps;
  cardsVariants: ThemedVariantsBoxProps;
}

type OverrideTheme<
  T extends BaseTheme,
  Overrides extends Partial<BaseTheme>,
> = {
  [K in keyof T]: K extends keyof Overrides ? Overrides[K] : T[K];
};

export type AppTheme = OverrideTheme<
  Theme,
  {
    borderRadii: string;
    // spacing: SpacingThemePropsSize;
    // sizes: SizesThemePropsType;
  }
>;

export type ThemedVariantsBoxProps = {
  [key: string]: Omit<BoxProps<AppTheme>, "textVariants"> &
    Omit<BoxProps<AppTheme>, "cardsVariants"> &
    Omit<BoxProps<AppTheme>, "buttonVariants">;
};

export type ThemedVariantsTextProps = {
  [key: string]: Omit<TextProps<AppTheme>, "textVariants"> &
    Omit<TextProps<AppTheme>, "cardsVariants"> &
    Omit<TextProps<AppTheme>, "buttonVariants">;
};
