export const movieSlugQuery = `
*[_type == "movie" && id == $slug][0]{
  id,
  title,
  year,
  genre,
  director,
  description,
  "image": image.asset->url,
}
`
