import { useCartStore } from "@/core/store/CartStore";
import * as ReactNavigation from "@react-navigation/native";
import { CartListNavigationProps } from "./CartList.model";

export function useCartListViewModel() {
  const [items, removeItem, setSelectedItem] = useCartStore((state) => [
    state.cart,
    state.remove,
    state.setSelectedCartItem,
  ]);

  const navigation = ReactNavigation.useNavigation<CartListNavigationProps>();

  function handleSelectItem(index: number) {
    setSelectedItem(index);
    navigation.navigate("CartItemDetails");
  }

  //WIP - Implementations

  return {
    items,
    removeItem,
    handleSelectItem,
  };
}
