const mongoose = require("mongoose");

const tickerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a ticker"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticker", tickerSchema);
