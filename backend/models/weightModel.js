const mongoose = require("mongoose");

const weightSchema = mongoose.Schema(
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
		weight: {
			type: Number,
			required: [true, "Please add a valid number"],
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Weight", weightSchema);
