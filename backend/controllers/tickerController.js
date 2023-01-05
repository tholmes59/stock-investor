//@desc     Get tickers
//@route    GET /api/tickers
//@access   Private
const getTickers = (req, res) => {
  res.status(200).json({ message: "The tickers!" });
};

//@desc     Set tickers
//@route    POST /api/tickers
//@access   Private
const setTickers = (req, res) => {
  res.status(200).json({ message: "Set tickers!" });
};

//@desc     Edit tickers
//@route    PUT /api/tickers
//@access   Private
const editTickers = (req, res) => {
  res.status(200).json({ message: `Update ticker ${req.params.id}` });
};

//@desc     Delete tickers
//@route    DELETE /api/tickers
//@access   Private
const deleteTickers = (req, res) => {
  res.status(200).json({ message: `Delete ticker ${req.params.id}` });
};

module.exports = {
  getTickers,
  setTickers,
  editTickers,
  deleteTickers,
};
