const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

// databse connection
connectDb();
const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
