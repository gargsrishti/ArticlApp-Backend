const { Router } = require('express')


const route = Router()

route.use('/feed', require('./feed'))
route.use('/', require('./slug'))


route.get('/', (req ,res) => {
  let articles = await getArticles(req.query.author, req.query.likedBy);
  res.status(200).json(articles);
})

route.post('/', isAuthenticated(), async (req, res) => {
  let title = req.body.article.title
  let desc = req.body.article.description
  let body = req.body.article.body
  let id = req.user.id
  try {
    const article = await createArticle(title, desc, body, id)
    res.status(200).json({ article: retrieveArticle(article, req.user) });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" })
  }
})
module.exports = route
