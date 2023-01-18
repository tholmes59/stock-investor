const asyncHandler = require("express-async-handler");
const Ticker = require("../models/tickerModel");

//@desc     Get tickers
//@route    GET /api/tickers
//@access   Private
const getTickers = asyncHandler(async (req, res) => {
  let tickers = await Ticker.find();
  res.status(200).json(tickers);
});

//@desc     Set tickers
//@route    POST /api/tickers
//@access   Private
const setTicker = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a ticker");
  }

  const ticker = await Ticker.create({
    text: req.body.text,
  });

  res.status(200).json(ticker);
});

//@desc     Edit tickers
//@route    PUT /api/tickers/:ticker
//@access   Private
const editTicker = asyncHandler(async (req, res) => {
  const ticker = await Ticker.findOne(req.params.ticker);

  if (!ticker) {
    res.status(400);
    throw new Error("Ticker not found");
  }

  const updatedTicker = await Ticker.findOneAndUpdate(
    req.params.ticker,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedTicker);
});

//@desc     Delete tickers
//@route    DELETE /api/tickers/:ticker
//@access   Private
const deleteTicker = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  const ticker = await Ticker.findOne({ text: req.params.id });
  if (!ticker) {
    res.status(400);
    throw new Error("Ticker not found");
  }

  // const deleteTicker = await Ticker.deleteOne(req.params.ticker);
  await ticker.remove();
  res.status(200).json({ ticker: req.params.id });
});

module.exports = {
  getTickers,
  setTicker,
  editTicker,
  deleteTicker,
};
