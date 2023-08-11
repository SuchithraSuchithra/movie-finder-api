async function fetchActors() {
  return fetchMovieIds().then((movieIds) =>
    fetchActorIdsByMovieIds(movieIds).then((personIds) =>
      fetchPersonByPersonIds([...new Set(personIds)])
    )
  )
}

async function fetchMovieIds(page = 1) {
  const movieList = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=${page}`
  )
    .then((res) => res.json())
    .then((movie) => movie.results.map((e) => e.id))

  return movieList
}

async function fetchActorIdsByMovieIds(movieIds) {
  const res = await Promise.all(
    movieIds.map(async (id) => {
      const credits = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`
      ).then((response) => response.json())
      return credits.cast
        .filter((member) => member.known_for_department === 'Acting')
        .map((e) => e.id)
    })
  )
  return res.flat()
}

async function fetchPersonByPersonIds(personIds) {
  const res = await Promise.all(
    personIds.map(async (id) => {
      const persons = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_API_KEY}`
      ).then((res) => res.json())
      return persons
    })
  )
  return res
}

function fetchActorById(id) {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=ee95ab36e2bf9dd9d3b4c7a558c33ff1`
  ).then((res) => res.json())
}

module.exports = {
  fetchActors,
  fetchActorById,
}
