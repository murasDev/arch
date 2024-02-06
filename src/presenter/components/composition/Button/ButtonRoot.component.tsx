import useAppTheme from "@/presenter/hooks/useAppTheme";
import { Theme } from "@/presenter/theme";
import {
  LayoutProps,
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  layout,
  spacing,
} from "@shopify/restyle";
import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Box } from "../../atoms/Box.atom";

type BoxCustomProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, "buttonVariants">;

const CustomBox = createRestyleComponent<BoxCustomProps, Theme>(
  [spacing, layout, createVariant({ themeKey: "buttonVariants" })],
  Box,
);

type Props = BoxCustomProps & {
  children: React.ReactNode;
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export default function ButtonRoot({
  children,
  onPress,
  isLoading,
  isDisabled,
  ...props
}: Props) {
  const theme = useAppTheme();

  return (
    <TouchableOpacity
      activeOpacity={theme.activeOpacity}
      disabled={isDisabled}
      onPress={onPress}
    >
      <CustomBox variant={isDisabled ? "disabled" : undefined} {...props}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          children
        )}
      </CustomBox>
    </TouchableOpacity>
  );
}
