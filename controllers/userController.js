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
};
