let getArticle = function(article, author, tagList, favorited, favoritesCount) {
	if (!article || !author) {
		return null
	}
	if(!tagList)
		tagList = []
	if(!favoritesCount)
		favoritesCount = 0
	if(!favorited)
		favorited = false
	let Article = {
			title: article.title,
			slug: article.slug,
			description: article.description,
			body: article.body,
			createdAt: article.createdAt,
			updatedAt: article.updatedAt,
			author: author,
			tagList: tagList,
			favorited:favorited,
			favoritesCount: favoritesCount
		};
		return Article;
	}

module.exports = getArticle;