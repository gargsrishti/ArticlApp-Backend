const Sequelize = require('sequelize')
const { db } = require('../config')

module.exports = db.define('article', {
    title: {
		type:Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.STRING
	},
	body: {
		type: Sequelize.STRING
	},
	slug: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	}
})
