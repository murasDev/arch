import { Theme } from "@/presenter/theme";
import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "../../atoms/Box.atom";

type Props = {
  onPress: () => void;
  children: ReactNode;
};

export default function CardRoot({ onPress, children }: Props) {
  const theme = useTheme<Theme>();
  return (
    <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        gap="m"
        backgroundColor="primaryCardBackground"
        borderRadius={"s"}
        p="m"
        flex={1}
        justifyContent="space-between"
      >
        {children}
      </Box>
    </TouchableOpacity>
  );
}
