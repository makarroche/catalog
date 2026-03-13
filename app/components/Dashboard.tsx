"use client";

import Tabs from "./Tabs";
import Card from "./Card";
import { useState } from "react";
import { Movie } from "../types/Movie";
import { movies } from "../utils/movies";
import { useDisplayMovies } from "../hooks/useDisplayMovies";
import Pagination from "./Pagination";
import useSanityContent from "../hooks/useSanityContent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [displayMovies, setDisplayMovies] = useState<Movie[]>(movies);
  const [currentPaginatedMovies, setCurrentPaginatedMovies] = useState<Movie[]>(
    [],
  );


  const { data: sanityMovies, isLoading, error } = useSanityContent("movies");

  useDisplayMovies(sanityMovies, activeTab, setDisplayMovies);

  return (
    <div className="browse">
      <div className="browse__header">
        <h2 className="browse__title">Browse your favorite</h2>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="browse__grid">
        {Array.isArray(currentPaginatedMovies) &&
          currentPaginatedMovies.length > 0 &&
          currentPaginatedMovies.map((movie: Movie, index: number) => {
            return <Card key={movie.id} movie={movie} index={index} />;
          })}
        {Array.isArray(currentPaginatedMovies) &&
          currentPaginatedMovies.length === 0 && (
            <p className="browse__empty">No Movies found</p>
          )}
      </div>
      <Pagination
        displayMovies={displayMovies}
        setCurrentPaginatedMovies={setCurrentPaginatedMovies}
      />
    </div>
  );
};

export default Dashboard;
