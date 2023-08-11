function fetchGenres() {
  return fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
    },
  }).then((res) => res.json())
}

function fetchMoviesByGenreId(genreId, page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genreId}&page=${page}`
  ).then((res) => {
    return res.json()
  })
}

module.exports = {
  fetchGenres,
  fetchMoviesByGenreId,
}
