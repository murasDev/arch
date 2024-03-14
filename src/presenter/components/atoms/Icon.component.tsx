import useAppTheme from "@/presenter/hooks/useAppTheme";
import { ThemeColors } from "@/presenter/theme/types";
import { getScaledSize } from "@/utils/sizes";
import { MaterialIcons } from "@expo/vector-icons/";
import React from "react";
import { IconName } from "../types";

type Props = {
  color: keyof ThemeColors;
  size: number;
  name: IconName;
};

export default function Icon({ color, size, name }: Props) {
  const theme = useAppTheme();

  return (
    <MaterialIcons
      name={name}
      size={getScaledSize(size)}
      color={theme.colors[color]}
    />
  );
}
