const express = require("express");
const router = express.Router();
const {
  getTickers,
  setTicker,
  editTicker,
  deleteTicker,
} = require("../controllers/tickerController");

router.get("/", getTickers);

router.post("/", setTicker);

router.put("/:id", editTicker);

router.delete("/:id", deleteTicker);

module.exports = router;
