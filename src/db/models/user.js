const Sequelize = require('sequelize')
const { db } = require('../config')

module.exports = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  token:{
    type: Sequelize.STRING
  }
})
