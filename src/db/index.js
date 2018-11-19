const user = require('./models/user')
const article = require('./models/article')
const tag = require('./models/tag')
const {db} = require('./config')

const tagOnArticle = db.define('tagsonarticles', {});
const favourites = db.define('favourites', {});
const followers = db.define('followers',{});

article.belongsTo(user);
Users.hasMany(article);
user.belongsToMany(user, {
  through:followers,
  as: 'userFollower',
  foreignKey: 'Followed'
})
article.belongsToMany(tag, {
  through: tagOnArticle,
  as:'tag'
});
tag.belongsToMany(article, {
  through: tagOnArticle,
  as:'tag'
});
article.belongsToMany(user, { 
  through: favourites,
  as: 'likedby'
});
Users.belongsToMany(article, {
  through: favourites,
  as: 'likedby'
});

module.exports = {
  db,
  favourites,
  user,
  article,
  followers,
  tag,
  tagOnArticle
}