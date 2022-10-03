const Router = require('express').Router()
const UserRouter = require('./UserRouter.js')

Router.get('/users', UserRouter)

module.exports = Router