const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRoute");

// databse connection
connectDb();
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/user", userRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
