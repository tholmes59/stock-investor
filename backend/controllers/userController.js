//@desc     Register new user
//@route    POST /api/users
//@access   Public
const registerUser = (req, res) => {
  res.status(200).json({ message: "User created" });
};

//@desc     Authenticate new user
//@route    POST /api/login
//@access   Public
const loginUser = (req, res) => {
  res.status(200).json({ message: "Login user" });
};

//@desc     Get user data
//@route    GET /api/users
//@access   Public
const getUser = (req, res) => {
  res.status(200).json({ message: "Display user info" });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
