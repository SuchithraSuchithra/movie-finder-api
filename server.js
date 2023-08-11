const express = require('express')
const app = express()

const port = process.env.PORT || 8081

require('dotenv').config()

const genresRouter = require('./routes/genres')
const moviesRouter = require('./routes/movies')
const directorsRouter = require('./routes/directors')
const actorsRouter = require('./routes/actors')
const personsRouter = require('./routes/persons')
const searchRouter = require('./routes/search')
const usersRouter = require('./routes/users')

require('./db')
app.use(express.static('client'))
app.use(express.json())

app.use('/api/genres', genresRouter)
app.use('/api/movies', moviesRouter)
app.use('/api/directors', directorsRouter)
app.use('/api/actors', actorsRouter)
app.use('/api/persons', personsRouter)
app.use('/api/search', searchRouter)
app.use('/api/user', usersRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
