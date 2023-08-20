const { getMovie } = require('../Controller/movieController')
const auth = require('../Middleware/auth')

const route = require('express').Router()

route.get('/',auth,getMovie)



module.exports = route