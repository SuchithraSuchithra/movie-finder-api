const express = require('express')
const router = express.Router()
const ActorsApi = require('../services/tmdb/actors_api')

router.get('/', (req, res, next) => {
  ActorsApi.fetchActors()
    .then((person) => {
      return res.json(person)
    })
    .catch(next)
})
router.get('/:id', (req, res, next) => {
  ActorsApi.fetchActorById(req.params.id)
    .then((person) => {
      return res.json(person)
    })
    .catch(next)
})

module.exports = router
