import { moviesQuery } from "@/sanity/queries/movie-query";
import { titlesQuery } from "@/sanity/queries/title";


export const getBadgeColor = (genre: string) => {
  const normalized = genre?.toLowerCase();

  switch (normalized) {
    case "action":
      return "badge--action";
    case "comedy":
      return "badge--comedy";
    case "drama":
      return "badge--drama";
    case "horror":
      return "badge--horror";
    case "sci-fi":
      return "badge--sci-fi";
    case "adventure":
      return "badge--adventure";
    case "fantasy":
      return "badge--fantasy";
    default:
      return "badge--default";
  }
};


export const getSanityQuery = (type: string) => {
  switch (type) {
    case "movies":
      return moviesQuery;
    case "title":
      return titlesQuery;
    default:
      return moviesQuery;
  }
};