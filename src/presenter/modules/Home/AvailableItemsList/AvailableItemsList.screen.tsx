import { Box } from "@/presenter/components/atoms/Box.atom";
import { Text } from "@/presenter/components/atoms/Text.atom";
import { Button } from "@/presenter/components/composition/Button";
import { formatToBRL } from "@/utils/currency";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { useAvailableItemsListViewModel } from "./AvailableItemsList.viewmodel";

export default function AvailableItemsList() {
  const { availableItems, handleSelectItem } = useAvailableItemsListViewModel();

  return (
    <Box paddingHorizontal="m" paddingTop="l" gap="l">
      <Text variant="title">Itens disponíveis</Text>
      <FlatList
        data={availableItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleSelectItem(item)}>
            <Box
              minWidth={180}
              maxWidth={180}
              gap="m"
              borderRadius="m"
              backgroundColor="primaryCardBackground"
            >
              <Box alignItems="center">
                <Animated.Image
                  style={{
                    width: "100%",
                    height: 180,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  source={{ uri: item.imageUrl }}
                  alt={item.name}
                  sharedTransitionTag={`homeToDetailsImage${item.id}`}
                />
              </Box>
              <Box paddingBottom="m" gap="m" paddingHorizontal="m">
                <Box>
                  <Text variant="buttonTitle">{formatToBRL(item.value)}</Text>
                  <Text variant="body">{item.name}</Text>
                </Box>
                <Button.Root padding="s" onPress={() => {}}>
                  <Button.Title variant="smallButtonTitle">
                    Adicionar
                  </Button.Title>
                </Button.Root>
              </Box>
            </Box>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Box width={20} />}
      />
    </Box>
  );
}
