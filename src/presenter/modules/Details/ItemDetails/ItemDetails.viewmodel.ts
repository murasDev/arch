import { useSelectedItemStore } from "@/core/store/SelectedItemStore";
import * as ReactNavigation from "@react-navigation/native";
import { ItemDetailsNavigationProps } from "./ItemDetails.model";

export default function useItemDetailsViewModel() {
  const [selectedItem, removeSelectedItem] = useSelectedItemStore((state) => [
    state.selectedItem,
    state.removeSelectedItem,
  ]);

  const navigation =
    ReactNavigation.useNavigation<ItemDetailsNavigationProps>();

  return {
    selectedItem,
  };
}
