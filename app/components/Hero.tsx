"use client";

import Image from "next/image";
import Button from "./Button";
import { JURASSIC_MOVIE_ID } from "../utils/constants";
import { useNavigateToMovie } from "../hooks/useNavigateToMovie";

const Hero = () => {
  const { handleNavigate } = useNavigateToMovie();

  return (
    <div className="hero">
      <div className="hero__bg">
        <Image
          src="/cinema.png"
          alt="Hero Background"
          fill
          className="hero__bg-image"
          sizes="100vw"
          priority
        />
      </div>
      <div className="hero__overlay" />
      <div className="hero__top">
        <div className="hero__brand">
          <Image
            src="/popcorn.png"
            alt="Logo"
            width={32}
            height={32}
            className="w-auto h-auto"
          />
          <span className="hero__brand-text">We love popcorn</span>
        </div>
        <Button onClick={() => handleNavigate(JURASSIC_MOVIE_ID)}>
          Discover our favorite
        </Button>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          <span>Popcorn</span>
          <span>Time</span>
        </h1>
        <p className="hero__description">
          <span>Choose a movie from</span>
          <span>our collection or</span>
          <span>discover new favorites.</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
