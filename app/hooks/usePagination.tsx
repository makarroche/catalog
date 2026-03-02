import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";

export const usePagination = (
  displayMovies: Movie[],
  setCurrentPaginatedMovies: (movies: Movie[]) => void,
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;
  const totalPages = Math.ceil(displayMovies.length / moviesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    setCurrentPage(1);
  }, [displayMovies]);

  useEffect(() => {
    const indexOfLastMovieInBatch = currentPage * moviesPerPage;
    const indexOfFirstMovieInBatch = indexOfLastMovieInBatch - moviesPerPage;
    const currentMovies = displayMovies.slice(
      indexOfFirstMovieInBatch,
      indexOfLastMovieInBatch,
    );
    setCurrentPaginatedMovies(currentMovies);
  }, [currentPage, displayMovies]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    pageNumbers,
  };
};
