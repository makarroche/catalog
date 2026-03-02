"use client";

import { useParams, useRouter } from "next/navigation";
import { movies } from "../../utils/movies";
import Button from "@/app/components/Button";
import Image from "next/image";

const MovieDisplay = () => {
  const params = useParams();
  const movieId = params.id;
  const movie = movies.find((m) => m.id === Number(movieId));
  const router = useRouter();

  if (!movie || isNaN(Number(movieId))) {
    return (
      <div className="movie-detail__movie-not-found">
        <h2>Movie not found</h2>
        <p>The movie you're looking for doesn't exist.</p>
        <Button onClick={() => router.push("/")}>Go Home</Button>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail__back">
        <Button onClick={() => router.back()}>Back</Button>
      </div>
      <div className="movie-detail__content">
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

      <Image
        className="movie-detail__image"
        src={movie.image}
        alt={movie.title}
        loading="lazy"
        fill
      />
    </div>
  );
};

export default MovieDisplay;
