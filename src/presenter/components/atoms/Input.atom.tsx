import useAppTheme from "@/presenter/hooks/useAppTheme";
import { Theme } from "@/presenter/theme";
import {
  BackgroundColorProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  SpacingProps,
  TypographyProps,
  backgroundColor,
  border,
  color,
  createRestyleComponent,
  layout,
  spacing,
  typography,
} from "@shopify/restyle";
import { TextInput, TextInputProps } from "react-native";

export type InputProps = TextInputProps &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  TypographyProps<Theme>;

const RestyleInput = createRestyleComponent<InputProps, Theme>(
  [backgroundColor, color, border, typography, spacing, layout],
  TextInput,
);

export default function Input({ ...props }: InputProps) {
  const theme = useAppTheme();

  return (
    <RestyleInput
      backgroundColor={"primaryCardBackground"}
      borderRadius="m"
      padding="m"
      fontFamily={theme.fonts.regular}
      borderWidth={2}
      fontSize={16}
      borderColor="primaryCardBorderColor"
      color="white"
      placeholderTextColor={theme.colors.primaryCardBorderColor}
      {...props}
    />
  );
}
