import { Theme, ThemeColors } from "@/presenter/theme/types";
import { MaterialIcons } from "@expo/vector-icons/";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
  color: keyof ThemeColors;
  iconName: keyof typeof MaterialIcons.glyphMap;
};

export default function IconButton({ color, onPress, iconName }: Props) {
  const theme = useTheme<Theme>();
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name={iconName} color={theme.colors[color]} size={24} />
    </TouchableOpacity>
  );
}
