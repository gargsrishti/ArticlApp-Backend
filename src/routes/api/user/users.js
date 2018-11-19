const { Router } = require('express')
const { createUser, searchUserByUsername } = require('../../controllers/users')

const route = Router()


route.post('/register', async (req, res) => {
  let username = req.body.user.username
  let email = req.body.user.email
  let password = req.body.user.password
  try {
    const newuser = await createUser(username, email, password)
    res.status(200).send({ newuser })
  } catch (e) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
})

route.post('/login', async (req, res) => {
  let user;
  let username = req.body.user.username
  let password = req.body.user.password
  try {
    user = await searchUserByUsername(username)
    if(user && user.password === password) {
      res.status(200).send({user})
    }
    else
    res.status(401).json({ Error: "Wrong Credentials" })

  } catch (e) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
})
module.exports = route