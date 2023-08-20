const { login, registerUser } = require('../Controller/userController')


const route = require('express').Router()

route.post('/',registerUser)

route.post('/login', login)

module.exports = route