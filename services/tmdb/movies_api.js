function fetchMoviesById(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
    },
  }).then((res) => res.json())
}

function fetchUpcomingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
      },
    }
  ).then((res) => res.json())
}

module.exports = {
  fetchMoviesById,
  fetchUpcomingMovies,
}
