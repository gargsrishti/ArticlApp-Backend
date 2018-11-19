const { article } = require('../db')
var rs = require('randomstring');

async function createArticle(title, desc, body, id) {
    let slug = rs.generate(20);
    newArticle = await artcle.create({title, desc, body, id, slug})
    return newArticle;
}
async function retrieveArticle(slug) {
    retrievedArticle = await article.findOne({where: {slug}})
    if(retrieveArticle != null)
        return retrievedArticle;
}
async function updateArticle(slug, title, body, description) {

    retrievedArticle = await article.findOne({where: { slug } })
    if(title){
        retrievedArticle.title = title;
        retrievedArticle.slug = randomstring.generate(15);
    }
    if(description){
        retrievedArticle.description = description;
    }
    if(body){
        retrievedArticle.body = body;
    }
    retrievedArticle.save();

    return retrievedArticle;
    
}
async function deleteArticle(slug) {

    await Articles.destroy({
        where: {
            slug
        }
    })
    return "delete successful";
    
}

async function getFeed(user) {
    followers = await user.getFollowee()
    ids = followers.map(item => item.id)

    articles = Articles.findAll({
        where: {
            userId: ids
        }
    })
    return articles;
}

module.exports = {
    createArticle,
    updateArticle,
    deleteArticle,
    retrieveArticle,
    getFeed
}
