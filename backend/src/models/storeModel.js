const mongoose = require("mongoose");

const Store = mongoose.Schema(
  {
    // schema is here.
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", Store);
