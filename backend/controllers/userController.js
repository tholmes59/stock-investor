const registerUser = (req, res) => {
  res.status(200).json({ message: "User created" });
};

module.exports = {
  registerUser,
};
