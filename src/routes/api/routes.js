const { Router } = require('express')


const route = Router()

route.use('/users', require('./users'))

route.use('/user', require('./user'))

route.use('/articles', require('./articles'))

route.use('/profiles', require('./user/profiles'))

route.use('/tags', require('./user/tags'))

module.exports = route
