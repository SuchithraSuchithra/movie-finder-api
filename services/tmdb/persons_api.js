function fetchPersonById(id) {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_API_KEY}`
  ).then((res) => res.json())
}

function fetchMoviesByPersonId(id) {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      const actingRoles = data.cast
      const directingRoles = data.crew.filter(
        (member) => member.job === 'Director'
      )

      console.log('Acted in:', actingRoles)
      console.log('Directed:', directingRoles)
      return [...actingRoles, ...directingRoles]
    })
    .catch((err) => console.error(err))
}

module.exports = {
  fetchPersonById,
  fetchMoviesByPersonId,
}
