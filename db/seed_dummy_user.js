require('dotenv').config()
require('./index.js')

const User = require('../models/user')

User.create({ email: 'xyz', password_digest: 'xyz' })
  .then((res) => console.log(res.rows))
  .catch((err) => console.log(err))
