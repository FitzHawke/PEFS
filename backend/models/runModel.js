const mongoose = require("mongoose");

const runSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    startTime: {
      type: String,
      required: [true, "Please add a text value"],
    },
    endTime: {
      type: String,
      required: [true, "Please add a text value"],
    },
    runTime: {
      type: Number,
      required: [true, "Please add a number value"],
    },
    distance: {
      type: Number,
      required: [true, "Please add a number value"],
    },
    pace: {
      type: Number,
      required: [true, "Please add a number value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Run", runSchema);
