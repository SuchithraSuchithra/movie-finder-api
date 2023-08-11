const express = require('express')
const router = express.Router()
const SearchApi = require('../services/tmdb/search_api')

router.get('/movie/:query', (req, res, next) => {
  SearchApi.searchMovieByQuery(req.params.query)
    .then((movie) => {
      return res.json(movie)
    })
    .catch(next)
})

router.get('/person/:query', (req, res, next) => {
  SearchApi.searchPersonByQuery(req.params.query)
    .then((person) => {
      return res.json(person)
    })
    .catch(next)
})

module.exports = router
