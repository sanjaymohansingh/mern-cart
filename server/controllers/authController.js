const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

//@desc Register a user
//@route POST /api/auth/signup
//@access public
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { signup };
