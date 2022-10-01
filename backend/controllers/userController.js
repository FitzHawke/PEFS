const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const passport = require("passport");
const User = require("../models/userModel");

// Generate JWT
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

//  @desc   Register New User
//  @route  POST /api/users
//  @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json("Please fill in all fields");
    throw new Error("RegisterNewUser: Not all fields filled");
  }

  // Check for existing user
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json("User already exists");
    throw new Error("RegisterNewUser: User already exists");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPass,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Invalid user data, please try again");
    throw new Error("RegisterNewUser: invalid user data");
  }
});

//  @desc   Authenticate a user
//  @route  POST /api/users/login
//  @access Public
const loginUser = asyncHandler(async (req, res, next) => {
  // eslint-disable-next-line consistent-return
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(500).json(info.message);
    }

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  })(req, res, next);
});

//  @desc   Get user data
//  @route  GET /api/users/me
//  @access Private
const getUserData = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { registerUser, loginUser, getUserData };
