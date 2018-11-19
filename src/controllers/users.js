const { Users } = require('../db')
const uuid = require('uuid/v1');

async function createUser(username, email, password) {

  if (!username) {
    throw new Error('Username is not defined')
  }
  const user = new Users();
  const token = uuid();
  user.username = username
  user.email = email
  user.password = password
  user.token = token
  return await Users.create(user)
}

async function searchUserByUsername(username) {
  const user = await Users.findOne({
    where: {username}
  })
  return user
}

async function searchUserById(id) {
  const user = await Users.findByPk(id)
  return user
}

async function searchUserByToken(token) {
  const user = await Users.findOne({
    where: {token}
  })
  return user
}

async function updateUser(user, email, bio, image) {
  if(email)
    user.email = email
  if(image)
    user.image = image
  if(bio)
    user.bio = bio
  user.save();
  return user;
}

async function followUser(user, followeeUsername) {
  let otherUser = await searchUserByUsername(followeeUsername);
  await user.addFollowee(otherUser);
  return otherUser;
}

async function unFollowUser(user, followeeUsername) {
  let otherUser = await searchUserByUsername(followeeUsername);
  await user.removeFollowee(otherUser);
  return otherUser;
}

async function isUserFollowing(user, otherUser){
  let isFollowing = await user.hasFollowee(otherUser);
  return isFollowing;
}

module.exports = {
  searchUserById,
  searchUserByUsername,
  createUser,
  updateUser,
  followUser,
  unFollowUser,
  searchUserByToken
}