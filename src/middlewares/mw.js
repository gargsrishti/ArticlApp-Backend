const { searchUserByToken } = require('../controllers/users')

function Authorized() {
  return async function (req, res, next) {
    let user = null
    if(!req.headers.authorization) {
      res.send(401).send({Message: "Unauthorized"})
    }
    else {
      try {
        user = await searchUserByToken(req.headers.authorization)
        if(user) {
          req.user = user;
          next();
        }
        else
        res.status(401).send({ Message: "Unauthorized" })
      } catch (error) {
        res.status(401).send({ Message: "Unauthorized" })
      }
    }
  }
}

function guestSession() {
  return async function (req, res, next) {
    let user = null
    if (req.headers.authorization) {
      try {
        user = await searchUserByToken(req.headers.authorization)
        if(user != null)
          req.user = user
      } catch (error) {
        console.log("There was an error")
      }
    }
    next();
  }
}

module.exports = {
  Authorized,
  guestSession
}
