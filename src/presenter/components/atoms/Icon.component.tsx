import { Theme } from "@/presenter/theme";
import { MaterialIcons } from "@expo/vector-icons/";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { IconName } from "../types";

type Props = {
  color: keyof Theme["colors"];
  size: keyof Theme["sizes"];
  name: IconName;
};

export default function Icon({ color, size, name }: Props) {
  const theme = useTheme<Theme>();

  return (
    <MaterialIcons
      name={name}
      size={theme.sizes[size]}
      color={theme.colors[color]}
    />
  );
}
