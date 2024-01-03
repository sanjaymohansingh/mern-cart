const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");

// databse connection
connectDb();
const app = express();

// middleware
app.use(express.json());

// routes
// users
app.use("/api/user", userRouter);

// authentication
app.use("/api/auth", authRouter);

// error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
