"use client";

import clsx from "clsx";
import { Movie } from "../types/Movie";
import { usePagination } from "../hooks/usePagination";

type PaginationProps = {
  displayMovies: Movie[];
  setCurrentPaginatedMovies: (movies: Movie[]) => void;
};

const Pagination = ({
  displayMovies,
  setCurrentPaginatedMovies,
}: PaginationProps) => {
  const { currentPage, setCurrentPage, totalPages, pageNumbers } =
    usePagination(displayMovies, setCurrentPaginatedMovies);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="pagination__btn"
        >
          Previous
        </button>
      )}

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={clsx(
            "pagination__btn",
            currentPage === number && "pagination__btn--active",
          )}
        >
          {number}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="pagination__btn"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
