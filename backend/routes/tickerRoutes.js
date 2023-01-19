const express = require("express");
const router = express.Router();
const {
  getTickers,
  setTicker,
  editTicker,
  deleteTicker,
} = require("../controllers/tickerController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickers).post(protect, setTicker);

router.route("/:id").put(protect, editTicker).delete(protect, deleteTicker);

module.exports = router;
