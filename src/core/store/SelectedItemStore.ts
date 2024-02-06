import { create } from "zustand";

type AuthStoreType = {
  selectedItem: AvailableItemsType | null;
  setSelectedItem: (item: AvailableItemsType) => void;
  removeSelectedItem: () => void;
};

export const useSelectedItemStore = create<AuthStoreType>((set) => {
  return {
    selectedItem: null,
    setSelectedItem: (item) => set(() => ({ selectedItem: item })),
    removeSelectedItem: () =>
      set(() => {
        console.log("removeSelectedItem");
        return { selectedItem: null };
      }),
  };
});
