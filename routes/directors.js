const express = require('express')
const router = express.Router()
const DirectorsApi = require('../services/tmdb/directors_api')

router.get('/', (req, res, next) => {
  DirectorsApi.fetchDirectors()
    .then((person) => {
      return res.json(person)
    })
    .catch(next)
})
router.get('/:id', (req, res, next) => {
  DirectorsApi.fetchDirectorById(req.params.id)
    .then((person) => {
      return res.json(person)
    })
    .catch(next)
})

module.exports = router
