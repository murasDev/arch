import { useSelectedItemStore } from "@/core/store/SelectedItemStore";
import firestore from "@react-native-firebase/firestore";
import * as ReactNavigation from "@react-navigation/native";
import React from "react";
import { AvailableItemsListNavigationProps } from "./AvailableItemsList.model";

// interface AvailableBrandsType {
//   brand: string;
//   items: AvailableItemsType[];
// }

export function useAvailableItemsListViewModel() {
  const [availableItems, setAvailableItems] = React.useState<
    AvailableItemsType[] | []
  >([]);
  const setSelectedItem = useSelectedItemStore(
    (state) => state.setSelectedItem,
  );

  const navigation =
    ReactNavigation.useNavigation<AvailableItemsListNavigationProps>();

  function handleSelectItem(item: AvailableItemsType) {
    setSelectedItem(item);
    navigation.navigate("AvailableItemsDetails");
  }

  function handleSectionDrinks(id: string, brands: string[]) {
    const list: AvailableItemsType[] = [];
    for (const brand of brands) {
      firestore()
        .collection(`drinks/${id}/${brand}`)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const { id, ...data } = doc.data() as AvailableItemsType;

            list.push({
              id: doc.id,
              ...data,
            });
          });
        });
    }
    setAvailableItems(list);
  }

  function handleAvailableItems() {
    return firestore()
      .collection("drinks")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          handleSectionDrinks(doc.id, doc.data().brands as string[]);
        });
      });
  }

  React.useEffect(() => {
    const unsubscribe = handleAvailableItems();

    return () => unsubscribe();
  }, []);

  return {
    availableItems,
    handleSelectItem,
  };
}
