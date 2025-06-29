import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
