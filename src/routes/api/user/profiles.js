const { Router } = require('express')
const { Authorized, guestSession } = require('../../../middlewares/mw')
const getProfile = require('../../../dto/profile');
const { searchUserByUsername, followUser, unFollowUser, isUserFollowing } = require('../../../controllers/users')

const route = Router()

route.get('/:username', guestSession(), async (req ,res) => {
  let user = req.user
  const retrievedProfile = await searchUserByUsername(req.params.username);
  let isFollowing = false;
  if(user)
    isFollowing = await isUserFollowing(user,retrievedProfile);

 
  profile =  {profile: getProfile(retrievedProfiles, isFollowing)};
  res.status(200).json(profile);
})

route.post('/:username/follow', Authorized(), async (req ,res) => {
  let user = req.user
  username = req.params.username
  userProfiles = await followUser(user, username);
  profile =  {profile: getProfile(userProfiles, true)};
  res.status(200).json(profile); 
})

route.delete('/:username/unfollow', Authorized(), async (req ,res) => {
  let user = req.user
  username = req.params.username
  userProfiles =await unFollowUser(user, username);
  profile =  {profile: getProfile(userProfiles, false)};
  res.status(200).json(profile);
})
module.exports = route