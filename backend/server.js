const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/api/tickers", (req, res) => {
  res.status(200).json({ message: "The tickers!" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
