import { useEffect } from "react";
import { Movie } from "../types/Movie";
import { tabsNames } from "../utils/constants";

export const useDisplayMovies = (
  movies: Movie[],
  activeTab: number,
  setDisplayMovies: (movies: Movie[]) => void,
) => {
  useEffect(() => {
    displayMoviesByTab();
  }, [activeTab, movies]);

  const displayMoviesByTab = () => {
    if (!Array.isArray(movies)) return;
    if (activeTab === 0) return setDisplayMovies(movies);
    else {
      const filteredMovies = movies?.filter((movie: Movie) => {
        return movie.genre.toLowerCase() === tabsNames[activeTab].toLowerCase();
      });
      setDisplayMovies(filteredMovies);
    }
  };
};
