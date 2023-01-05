const express = require("express");
const router = express.Router();
const {
  getTickers,
  setTickers,
  editTickers,
  deleteTickers,
} = require("../controllers/tickerController");

router.get("/", getTickers);

router.post("/", setTickers);

router.put("/:id", editTickers);

router.delete("/:id", deleteTickers);

module.exports = router;
