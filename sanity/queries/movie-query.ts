export const moviesQuery = `
*[_type == "movie"]{
  id,
  title,
  year,
  genre,
  director,
  description,
  "image": image.asset->url,
}
`
