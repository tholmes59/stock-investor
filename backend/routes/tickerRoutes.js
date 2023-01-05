const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "The tickers!" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set tickers!" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update ticker ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete ticker ${req.params.id}` });
});

module.exports = router;
