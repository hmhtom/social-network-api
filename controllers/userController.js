const { User, Thought } = require("../models");

module.exports = {
  //Get All Users excluding "__v" field
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((users) => res.json(users))
      .catch((error) => res.status(500).json(error));
  },

  //Get single User with userId excluding "__v" field
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: "User Not Found." })
      )
      .catch((error) => res.status(500).json(error));
  },

  //Create new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //Update User by userId
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: "User Not Found." })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //Delete User by userId
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "User Not Found." })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() =>
        res.json({ message: "User and associated Thoughts Deleted." })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //Create Friend with friendId and userId
  createFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: "User Not Found." })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //Delete Friend with friendId and userId
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        user
          ? res.json(user)
          : res.status(404).json({ message: "User Not Found." })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },
};
