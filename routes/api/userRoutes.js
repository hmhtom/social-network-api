const router = require("express").Router();

//./api/users
//Get: get all users
//Post: create a new user
router.route("/").get().post();

//./api/users/:userId
//Get: get a single user by its _id and populated thought and friend data
//Put: update a user by its _id
//Delete: remove user by its _id
router.route("/:userId").get().put().delete();

//./api/users/:userId/friends/:friendId
//Post: add a new friend to a user's friend list
//Delete: remove a friend from a user's friend list
router.route("/:userId/friends/:friendId").post().delete();

module.exports = router;
