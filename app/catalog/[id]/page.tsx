"use client";

import { useParams, useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import Image from "next/image";
import useSanityContent from "@/app/hooks/useSanityContent";
import { Heart } from "lucide-react";
import { useFavoriteStore } from "@/app/store/favorite";
import { useFavorites } from "@/app/hooks/useFavorites";

const MovieDisplay = () => {
  const params = useParams();
  const movieId = params.id;
  const router = useRouter();

  const {
    data: movie,
    isLoading,
    error,
  } = useSanityContent(
    "movieSlug",
    typeof movieId === "string" ? movieId : undefined,
  );

  const { favorites } = useFavoriteStore();

  const toggleFavorites = useFavorites(movieId as string);

  if ((!movie || isNaN(Number(movieId)) || error) && !isLoading) {
    return (
      <div className="movie-detail__movie-not-found">
        <h2>Movie not found</h2>
        <p>The movie you're looking for doesn't exist.</p>
        <Button onClick={() => router.push("/")}>Go Home</Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="movie-detail__movie-not-found">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail__back">
        <Button onClick={() => router.back()}>Back</Button>
      </div>
      <div className="movie-detail__content">
        {isLoading && <p>Loading...</p>}
        <h1 className="movie-detail__title">{movie.title}</h1>
        <p className="movie-detail__description">{movie.description}</p>
        <div className="movie-detail__info">
          <p>
            Year: <span>{movie.year}</span>
          </p>
          <div className="movie-detail__genre">
            <p>
              Genre: <span>{movie.genre}</span>
            </p>
            <Image
              src="/popcorn.png"
              alt="Logo"
              width={32}
              height={32}
              className="w-auto h-auto"
              loading="lazy"
            />
          </div>
          <p>
            Director: <span>{movie.director}</span>
          </p>
        </div>
      </div>
      <div className="movie-detail__image-container">
        <div className="card__overlay" />
        <Image
          className="movie-detail__image"
          src={movie.image}
          alt={movie.title}
          width={200}
          height={200}
        />
        <div
          className={
            favorites.length > 0 &&
            typeof movieId === "string" &&
            favorites.includes(movieId)
              ? "card__heart--filled"
              : "card__heart"
          }
          onClick={toggleFavorites}
        >
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
