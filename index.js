const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

//Express App Initialization
const app = express();
//Express Server Port
const PORT = process.env.port || 3001;

//Express Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Main Routing Middleware
app.use(routes);

//Connect Express App to MongoDb
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Social Media API server listening on Port ${PORT}`);
  });
});
