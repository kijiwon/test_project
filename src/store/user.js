import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      userId: "",
      userName: "",
      updateUserId: (userId) => set(() => ({ userId: userId })),
      updateUserName: (userName) => set(() => ({ userName: userName })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
