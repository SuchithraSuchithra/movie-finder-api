const express = require('express')
const router = express.Router()
const PresonsApi = require('../services/tmdb/persons_api')

router.get('/:id', (req, res, next) => {
  PresonsApi.fetchPersonById(req.params.id)
    .then((person) => {
      return res.json(person)
    })
    .catch(next)
})

router.get('/:id/movies', (req, res, next) => {
  PresonsApi.fetchMoviesByPersonId(req.params.id)
    .then((person) => {
      return res.json(person)
    })
    .catch(next)
})

module.exports = router
