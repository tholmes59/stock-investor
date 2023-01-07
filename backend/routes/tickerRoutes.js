const express = require("express");
const router = express.Router();
const {
  getTickers,
  setTicker,
  editTicker,
  deleteTicker,
} = require("../controllers/tickerController");

router.route("/").get(getTickers).post(setTicker);

router.route("/:id").put(editTicker).delete(deleteTicker);

module.exports = router;
