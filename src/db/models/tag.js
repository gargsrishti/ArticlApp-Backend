const Sequelize = require('sequelize')
const { db } = require('../config')

module.exports = db.define('tag', {
    tagName: {
		type: Sequelize.STRING(10),
		allowNull: false
	},
})
