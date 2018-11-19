const {Authorized} = require('../../middlewares/mw')
const {Router} = require('express')

const { updateUser } = require('../../controllers/users')

const route = Router()

route.put('/',Authorized(),async (req, res) => {
  if(req.user) {
    let user = req.user
    let email = req.body.user.email
    let bio = req.body.user.bio
    let image = req.body.user.image
    const user = await updateUser(user, email, bio, image)
    res.status(200).json(user);
  }
  else{
    res.status(500).json({message: "Internal server error"})
  }
})
route.get('/', Authorized(), (req, res) => {
    res.status(200).json(req.user);
})

module.exports = route
