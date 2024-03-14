import { Box } from "@/presenter/components/atoms/Box.atom";
import { Text } from "@/presenter/components/atoms/Text.atom";
import { formatToBRL } from "@/utils/currency";
import React from "react";
import Animated from "react-native-reanimated";

import { Button } from "@/presenter/components/composition/Button";
import { ScrollView } from "react-native";
import useItemDetailsViewModel from "./ItemDetails.viewmodel";

export default function ItemDetails() {
  const { selectedItem } = useItemDetailsViewModel();

  return (
    <ScrollView>
      <Box flex={1} backgroundColor="mainBackground">
        <Animated.Image
          style={{ width: "100%", height: 400 }}
          source={{ uri: selectedItem?.imageUrl }}
          alt={selectedItem?.name}
          sharedTransitionTag={`homeToDetailsImage${selectedItem?.id}`}
        />
        <Box padding="l">
          <Text variant="subTitle">{selectedItem?.name}</Text>
          <Text variant="h2">{formatToBRL(selectedItem!.value)}</Text>
          <Text variant="body">{selectedItem?.description}</Text>
          <Button.Root marginTop="l" onPress={() => {}}>
            <Button.Title variant="buttonTitle">Adicionar</Button.Title>
          </Button.Root>
        </Box>
      </Box>
    </ScrollView>
  );
}
