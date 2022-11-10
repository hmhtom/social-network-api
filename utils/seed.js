const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Database connected, start seeding.");

  await User.deleteMany({});

  await Thought.deleteMany({});

  await User.create({
    username: "test_user_1",
    email: "johndoe@gmail.com",
  });

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
