import { useFavoriteStore } from "../store/favorite";

export const useFavorites = (movieId: string) => {
  const { favorites, setFavorites } = useFavoriteStore();

  const toggleFavorites = () => {
    if (typeof movieId === "string") {
      const exists = favorites.includes(movieId);
      if (!exists) {
        setFavorites([...favorites, movieId]);
      } else {
        setFavorites(favorites.filter((id) => id !== movieId));
      }
    }
  };

  return toggleFavorites;
};
