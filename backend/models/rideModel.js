const mongoose = require("mongoose");

const rideSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: {
      type: String,
      required: [true, "Please add a date value"],
    },
    startTime: {
      type: String,
      required: [true, "Please add a start time value"],
    },
    endTime: {
      type: String,
      required: [true, "Please add a end time value"],
    },
    rideTime: {
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

module.exports = mongoose.model("Ride", rideSchema);
