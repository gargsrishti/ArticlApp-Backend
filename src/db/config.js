const Sequelize = require('sequelize')
const db = new Sequelize({
  dialect: "sqlite",
  storage: "./conduit.db"
})
module.exports = {
  db
}
