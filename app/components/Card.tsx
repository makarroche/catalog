"use client";

import Badge from "./Badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Movie } from "../types/Movie";
import { useNavigateToMovie } from "../hooks/useNavigateToMovie";

type CardProps = {
  movie: Movie;
  index: number;
};

const Card = ({ movie, index }: CardProps) => {
  const { title, description, genre, image, id } = movie;
  const { handleNavigate } = useNavigateToMovie();

  return (
    <div onClick={() => handleNavigate(id)} className="card">
      <div>
        <div className="card__image-wrapper">
          <motion.div
            className="relative w-full h-full"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={image}
              alt={title}
              className="object-cover"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <div className="card__overlay" />

          <div className="card__badge">
            <Badge genre={genre} />
          </div>
        </div>
      </div>

      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
