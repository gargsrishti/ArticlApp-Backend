const { Router } = require('express')
const { getArticle, updateArticle, deleteArticle} = require('../../../controllers/articles')

const getArticleDto = require('../../../dto/article');
const { Authorized } = require('../../../middlewares/mw')

const route = Router()

route.get('/:slug', Authorized(), async (req, res) => {
  let article = await getArticle(req.params.slug);
  let author = await article.getUser();
  let likers = await article.countLikers();
  let isLikedbyUser = false;
  if (req.user)
    isLikedbyUser = await article.hasLiker(req.user);

  res.status(200).json({ article: getArticleDto(article, author, likers, isLikedbyUser) });

})

route.put('/:slug', Authorized(), async (req, res) => {
  let article = await getArticle(req.params.slug);
  if (req.user.id !== article.userId)
    res.status(400).json({ message: "Unauthorized to update" });

  article = await updateArticle(req.params.slug, req.body.article.title, req.body.article.description, req.body.article.body)
  let author = await article.getUser();
  let likes = await article.countLikers();

  res.status(200).json({ article: getArticleDto(article, author, likes, false) });

})

route.delete('/:slug', Authorized(), async (req, res) => {
  let article = await getArticle(req.params.slug);
  if (req.user.id !== article.userId)
    res.status(400).json({ message: "Not Authorized" });

  let message = await deleteArticle(req.params.slug);
  res.status(200).json({ message: message });


})

module.exports = route
