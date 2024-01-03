const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");

// databse connection
connectDb();
const app = express();

// middlewares
app.use(express.json());

// routes
// users
app.use("/api/user", userRouter);

// authentication
app.use("/api/auth", authRouter);

// server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
