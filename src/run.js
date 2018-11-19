const config = require('../config')
const {app} = require('./server')
const {db} = require('./db')


db.sync()
  .then(() => {
      app.listen(3000, () => {
        console.log('Started this app on http://localhost:' + 3000)
      })
    })
    .catch(console.error)
