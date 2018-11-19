const { Router } = require('express')
const { isAuthenticated } = require('../../../middlewares/mw')
const { getFeed } = require('../../../controllers/articles')

const route = Router()
route.get('/', isAuthenticated(), async (req, res) => {
    allArticles = await getFeed(req.user);
    res.status(200).json({articles:allArticles})

})

module.exports = route

