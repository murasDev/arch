import Icon from "@/presenter/components/atoms/Icon.component";
import { Text } from "@/presenter/components/atoms/Text.atom";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "../../components/atoms/Box.atom";

export default function Settings() {
  return (
    <Box
      paddingHorizontal="m"
      pt="xl"
      backgroundColor="mainBackground"
      flex={1}
      gap="m"
    >
      <Text variant="title">Configurações</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <Box
          borderRadius="m"
          alignItems="center"
          flexDirection="row"
          p="m"
          borderColor="primaryCardBorderColor"
          borderWidth={1}
          width="100%"
          justifyContent="space-between"
        >
          <Box alignItems="center" flexDirection="row" gap="s">
            <Icon color="primaryCardBorderColor" name="streetview" size={24} />
            <Text variant="buttonTitle" color="white">
              Endereço
            </Text>
          </Box>
          <Icon color="primaryCardBorderColor" name="chevron-right" size={24} />
        </Box>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <Box
          borderRadius="m"
          alignItems="center"
          flexDirection="row"
          p="m"
          borderColor="error"
          borderWidth={1}
          width="100%"
          justifyContent="space-between"
        >
          <Box alignItems="center" flexDirection="row" gap="s">
            <Icon color="error" name="logout" size={24} />
            <Text variant="buttonTitle" color="error">
              Logout
            </Text>
          </Box>
          <Icon color="error" name="chevron-right" size={24} />
        </Box>
      </TouchableOpacity>
    </Box>
  );
}
