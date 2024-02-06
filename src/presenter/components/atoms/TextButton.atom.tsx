import useAppTheme from "@/presenter/hooks/useAppTheme";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "./Text.atom";

type Props = {
  title: string;
  onPress: () => void;
};

export default function TextButton({ title, onPress }: Props) {
  const theme = useAppTheme();
  return (
    <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={onPress}>
      <Text variant="primaryColorCardText">{title}</Text>
    </TouchableOpacity>
  );
}
