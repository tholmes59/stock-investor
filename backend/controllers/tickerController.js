const asyncHandler = require("express-async-handler");

//@desc     Get tickers
//@route    GET /api/tickers
//@access   Private
const getTickers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "The tickers!" });
});

//@desc     Set tickers
//@route    POST /api/tickers
//@access   Private
const setTicker = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a ticker");
  }

  res.status(200).json({ message: "Set ticker!" });
});

//@desc     Edit tickers
//@route    PUT /api/tickers
//@access   Private
const editTicker = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update ticker ${req.params.id}` });
});

//@desc     Delete tickers
//@route    DELETE /api/tickers
//@access   Private
const deleteTicker = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete ticker ${req.params.id}` });
});

module.exports = {
  getTickers,
  setTicker,
  editTicker,
  deleteTicker,
};
