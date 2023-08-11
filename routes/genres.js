const express = require('express')
const router = express.Router()
const GenresApi = require('../services/tmdb/genres_api')

// router.get('/', (req, res, next) => {
//   GenresApi.fetchGenres().then(async (resObj) => {
//     console.log(resObj)

//     for (const item of resObj.genres) {
//       console.log(item.id)
//       const resultObj = await GenresApi.fetchGenreById(item.id)
//       item['posterPath'] = resultObj.results[0].poster_path
//     }
//     return res.json(resObj)
//   })
// })

// Hardcoding for now just to avoid hitting the api

router.get('/', (req, res, next) => {
  return res.json({
    genres: [
      {
        id: 28,
        name: 'Action',
        posterPath: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      },
      {
        id: 12,
        name: 'Adventure',
        posterPath: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      },
      {
        id: 16,
        name: 'Animation',
        posterPath: '/qayga07ICNDswm0cMJ8P3VwklFZ.jpg',
      },
      {
        id: 35,
        name: 'Comedy',
        posterPath: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      },
      {
        id: 80,
        name: 'Crime',
        posterPath: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      },
      {
        id: 99,
        name: 'Documentary',
        posterPath: '/xwkYWcs8aypUtk3xDRUh0ndo4GA.jpg',
      },
      {
        id: 18,
        name: 'Drama',
        posterPath: '/9dTO2RygcDT0cQkawABw4QkDegN.jpg',
      },
      {
        id: 10751,
        name: 'Family',
        posterPath: '/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
      },
      {
        id: 14,
        name: 'Fantasy',
        posterPath: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      },
      {
        id: 36,
        name: 'History',
        posterPath: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      },
      {
        id: 27,
        name: 'Horror',
        posterPath: '/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg',
      },
      {
        id: 10402,
        name: 'Music',
        posterPath: '/2aBjSNnl1eIsR8RVNlczc1beL6l.jpg',
      },
      {
        id: 9648,
        name: 'Mystery',
        posterPath: '/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg',
      },
      {
        id: 10749,
        name: 'Romance',
        posterPath: '/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
      },
      {
        id: 878,
        name: 'Science Fiction',
        posterPath: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      },
      {
        id: 10770,
        name: 'TV Movie',
        posterPath: '/hES2eVAbVt08JJTqgu3jmI34Yxx.jpg',
      },
      {
        id: 53,
        name: 'Thriller',
        posterPath: '/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg',
      },
      {
        id: 10752,
        name: 'War',
        posterPath: '/jP2ik17jvKiV5sGEknMFbZv7WAe.jpg',
      },
      {
        id: 37,
        name: 'Western',
        posterPath: '/icL1zn5z1L5ULIpxkuOLjeUgURY.jpg',
      },
    ],
  })
})

router.get('/:id', (req, res, next) => {
  GenresApi.fetchMoviesByGenreId(req.params.id)
    .then((note) => {
      return res.json(note)
    })
    .catch(next)
  // .catch((err) => res.status(404).json({ message: err.message }))
})

module.exports = router
