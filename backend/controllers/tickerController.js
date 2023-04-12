const asyncHandler = require("express-async-handler");
const Ticker = require("../models/tickerModel");
const User = require("../models/userModel");

//@desc     Get user tickers
//@route    GET /api/tickers/
//@access   Private
const getTickers = asyncHandler(async (req, res) => {
  // get user using id and JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  let tickers = await Ticker.find({ user: req.user.id });
  res.status(200).json(tickers);
});

//@desc     Set tickers
//@route    POST /api/tickers
//@access   Private
const setTicker = asyncHandler(async (req, res) => {
  const { image, companyName, symbol } = req.body;

  if (!image || !companyName || !symbol) {
    res.status(400);
    throw new Error("Please add correct information");
  }

  // get user using id and JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticker = await Ticker.create({
    image,
    companyName,
    symbol,
    user: req.user.id,
  });

  res.status(200).json(ticker);
});

//@desc     Edit tickers
//@route    PUT /api/tickers/:ticker
//@access   Private
const editTicker = asyncHandler(async (req, res) => {
  const ticker = await Ticker.findById(req.params.id);

  if (!ticker) {
    res.status(400);
    throw new Error("Ticker not found");
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the user asigned to ticker
  if (ticker.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authroized to edit");
  }

  const updatedTicker = await Ticker.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedTicker);
});

//@desc     Delete tickers
//@route    DELETE /api/tickers/:ticker
//@access   Private
const deleteTicker = asyncHandler(async (req, res) => {
  const ticker = await Ticker.findById(req.params.id);
  if (!ticker) {
    res.status(400);
    throw new Error("Ticker not found");
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the user asigned to ticker
  if (ticker.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authroized to edit");
  }

  await ticker.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTickers,
  setTicker,
  editTicker,
  deleteTicker,
};
