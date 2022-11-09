const { connect, connection } = require("mongoose");
require("dotenv").config();

//MongoDB connection config
connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
