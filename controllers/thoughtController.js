const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  //Get all Thoughts excluding "__v" field
  getThoughts(req, res) {
    Thought.find()
      .select("-__v")
      .then((thought) => res.json(thought))
      .catch((error) => res.status(500).json);
  },

  //Get one Thought by thoughtId excluding "__v" field
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: "Thought Not Found." })
      )
      .catch((error) => res.json(error));
  },

  //Create new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        user
          ? res.json({ user: user, message: "Thought Created" })
          : res.status(404).json({
              message: "Thought created, user not found.",
            })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //Update thought by thoughtId
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: "Thought Not Found." })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //Delete thought by thoughtId
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Thought Not Found." })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Thought Deleted but No User Found." })
          : res.json({ message: "Thought Deleted." })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //Create Reaction
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: "Thought Not Found." })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  //Delete Reaction by reactionId
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        thought
          ? res.json(thought)
          : res.status(404).json({ message: "Thought Not Found." })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  },
};
