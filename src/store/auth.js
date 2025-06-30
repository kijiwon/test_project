import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialState = {
  userId: "",
  accessToken: "",
  tokenExp: "",
  tokenTimeout: null,
};

export const useAuthStore = create(
  persist(
    (set) => ({
      userId: "",
      accessToken: "",
      tokenExp: "",
      tokenTimeout: null,
      updateUserId: (userId) => set(() => ({ userId: userId })),
      updateAccessToken: (accessToken) =>
        set(() => ({ accessToken: accessToken })),
      updateTokenExp: (tokenExp) => set(() => ({ tokenExp: tokenExp })),
      updateTokenTimeout: (tokenTimeout) =>
        set(() => ({ tokenTimeout: tokenTimeout })),
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
