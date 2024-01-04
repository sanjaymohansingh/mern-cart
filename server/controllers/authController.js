const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

//@desc Register a user
//@route POST /api/auth/signup
//@access public
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

//@desc Login a user
//@route POST /api/auth/signin
//@access public

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const isMatch = bcryptjs.compareSync(password, validUser.password);
    if (!isMatch) {
      return next(errorHandler(400, "Invalid credentials"));
    }
    const token = jwt.sign(
      { id: validUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 7),
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, signin };
