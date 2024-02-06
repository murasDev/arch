import { Card } from "@/presenter/components/composition/Card";
import React from "react";
import { FlatList } from "react-native";

import { Box } from "@/presenter/components/atoms/Box.atom";
import { Text } from "@/presenter/components/atoms/Text.atom";
import { useCartListViewModel } from "./CartList.viewmodel";

export default function CartList() {
  const { items, removeItem, handleSelectItem } = useCartListViewModel();

  return (
    <Box gap="l" flex={1} p="m">
      <Text variant="title">Carrinho</Text>
      <FlatList
        data={items}
        renderItem={(item) => (
          <Card.Root onPress={() => handleSelectItem(item.index)}>
            <Card.Text>{`${item.item.name} - ${item.item.price}`}</Card.Text>
            <Card.IconButton
              iconName="restore-from-trash"
              color="error"
              onPress={() => removeItem(item.item.id)}
            />
          </Card.Root>
        )}
        ListEmptyComponent={() => (
          <Text>Seu carrinho está vazio no momento =\</Text>
        )}
        ItemSeparatorComponent={() => <Box height={10} />}
      />
    </Box>
  );
}
