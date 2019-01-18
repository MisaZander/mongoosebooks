require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const savings = require("./routes/api/savings");
const books = require("./routes/api/books");

const PORT = process.env.PORT || 3001;
const app = express();

const MONGOURI = process.env.MONGODB_URI || process.env.MONGOURI; // =Heroku addon || .env file

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/books", books);
app.use("/api/savings", savings);

//If production, serve the build folder
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  //The catch all route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index/html"));
  });
}

mongoose
  .connect(
    MONGOURI,
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
  )
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(PORT, () => {
      console.log(`API server listening on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
