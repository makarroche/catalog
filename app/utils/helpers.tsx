import { moviesQuery } from "@/sanity/queries/movie-query";
import { movieSlugQuery } from "@/sanity/queries/movie-slug";
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

export const getSanityQuery = (type: string, slug?: string) => {
  switch (type) {
    case "movies":
      return { query: moviesQuery };
    case "movieSlug":
      return { query: movieSlugQuery, params: { slug } };
    case "title":
      return { query: titlesQuery };
    default:
      return { query: moviesQuery };
  }
};
