import { UserModel } from "@/domain/models/user.model";
import { create } from "zustand";

type AuthStoreType = {
  user: UserModel;
  setUser: (user: UserModel) => void;
};

export const useAuthStore = create<AuthStoreType>((set) => {
  return {
    user: {} as UserModel,
    setUser: (user) => set(() => ({ user })),
  };
});
