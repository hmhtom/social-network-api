const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getOneThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

//./api/thoughts
//Get: get all thoughts
//Post: create a new thought and add it to associated user's thoughts field
router.route("/").get(getThoughts).post(createThought);

//./api/thoughts/:thoughtId
//Get: get a single thought by its _id
//Put: update a thought by its _id
//Delete: remove a thought by its _id
router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

//./api/thoughts/:thoughtsId/reactions
//Post: create a reaction stored in a single thought's reactions field
router.route("/:thoughtId/reactions").post(createReaction);

//./api/thoughts/:thoughtsId/reactions/:reactionId
//Delete: remove a reaction by its _id
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
