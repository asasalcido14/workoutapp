const mongoose = require("mongoose");
//npm package run by node, to help mongodb
const express = require("express");

const logger = require("morgan");
// look up "morgan npm package"

const PORT = process.env.PORT || 3000;
// specific to heroku

const app = express(); 
//middle ware: environment for server to run 

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// NEED these top two for any express server

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// 21 and 22 are middleware, specific to the mongoose connection

// routes
app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes.js"));
// get the routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


