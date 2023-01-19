const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc     Register new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const currentUser = await User.findOne({ email });
  if (currentUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data for setup");
  }
});

//@desc     Authenticate new user
//@route    POST /api/login
//@access   Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login user" });
});

//@desc     Get user data
//@route    GET /api/users
//@access   Public
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Display user info" });
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
