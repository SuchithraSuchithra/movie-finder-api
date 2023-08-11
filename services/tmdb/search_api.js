function searchMovieByQuery(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
      },
    }
  ).then((res) => res.json())
}

function searchPersonByQuery(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
      },
    }
  ).then((res) => res.json())
}

module.exports = {
  searchMovieByQuery,
  searchPersonByQuery,
}
