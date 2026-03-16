export const movieSlugQuery = `
*[_type == "product" && slug.current == $slug][0]{
  id,
  title,
  year,
  genre,
  director,
  description,
  "image": image.asset->url,
}
`
