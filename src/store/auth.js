import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      userId: "",
      accessToken: "",
      tokenExp: "",
      updateUserId: (userId) => set(() => ({ userId: userId })),
      updateAccessToken: (accessToken) =>
        set(() => ({ accessToken: accessToken })),
      updateTokenExp: (tokenExp) => set(() => ({ tokenExp: tokenExp })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
