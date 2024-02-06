import { create } from "zustand";

type CartStoreType = {
  cart: AvailableItemsType[];
  addToCart: (item: AvailableItemsType) => void;
  remove: (id: string) => void;
};

export const useCartStore = create<CartStoreType>((set) => {
  return {
    cart: [],
    selectedItem: null,
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    remove: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  };
});
