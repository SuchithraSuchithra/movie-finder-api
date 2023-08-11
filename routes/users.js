const express = require('express')
const router = express.Router()

const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const AppError = require('../lib/app_error')

function createJsonWebToken(data) {
  return jwt.sign(data, process.env.SECRET, { expiresIn: '24h' })
}

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      throw new AppError(400, 'Invalid email or password')
    }

    console.log(user)
    const match = await bcrypt.compare(password, user.password_digest)

    if (!match) {
      throw new AppError(400, 'invalid email or password')
    }

    const token = createJsonWebToken({ id: user._id, email: user.email })
    res.json(token)
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  const { email, password, profilePath = '' } = req.body

  try {
    const user = await User.create({
      email,
      password_digest: password,
      profile_path: profilePath,
    })
    if (!user) {
      throw new AppError(400, 'User creation failed')
    }

    console.log(user)
    res.json({ status: 'success', description: 'User created successfully' })
  } catch (err) {
    next(err)
    res.json({ status: 'failure', description: 'Username already in use' })
  }
})

module.exports = router
