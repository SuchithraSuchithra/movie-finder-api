const express = require('express')
const router = express.Router()
const MoviesApi = require('../services/tmdb/movies_api')

router.get('/upcoming', (req, res, next) => {
  MoviesApi.fetchUpcomingMovies(req.params.id)
    .then((movies) => {
      return res.json(movies)
    })
    .catch(next)
    .catch((err) => res.status(404).json({ message: err.message }))
})

router.get('/:id', (req, res, next) => {
  MoviesApi.fetchMoviesById(req.params.id)
    .then((movies) => {
      return res.json(movies)
    })
    .catch(next)
    .catch((err) => res.status(404).json({ message: err.message }))
})

module.exports = router
