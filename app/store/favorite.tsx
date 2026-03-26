import { create } from "zustand";
import { persist } from "zustand/middleware";

type favorite = {
  favorites: string[];
  setFavorites: (favorites: string[]) => void;
};

export const useFavoriteStore = create<favorite>()(
  persist(
    (set) => ({
      favorites: [],
      setFavorites: (favorites) => set({ favorites }),
    }),
    {
      name: "favorite-storage",
    },
  ),
);
