const mongoose = require("mongoose");

const tickerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      required: [true],
    },
    companyName: {
      type: String,
      required: [true],
    },
    symbol: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticker", tickerSchema);
