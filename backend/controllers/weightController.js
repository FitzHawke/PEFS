const asyncHandler = require("express-async-handler");
const Weight = require("../models/weightModel");

//  @desc   Get Weights
//  @route  GET /api/weights
//  @access Private
const getWeights = asyncHandler(async (req, res) => {
	const weights = await Weight.find({ user: req.user.id }).sort({
		date: "desc",
	});

	res.status(200).json(weights);
});

//  @desc   Set Weight
//  @route  POST /api/weights
//  @access Private
const setWeight = asyncHandler(async (req, res) => {
	const weight = await Weight.create({
		user: req.user.id,
		date: req.body.date,
		weight: req.body.weight,
	});

	res.status(200).json(weight);
});

//  @desc   Update Weight
//  @route  PUT /api/weights/:id
//  @access Private
const updateWeight = asyncHandler(async (req, res) => {
	const weight = await Weight.findById(req.params.id);

	if (!weight) {
		res.status(400);
		throw new Error("weight not found");
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	// Make sure the logged in user match the owner
	if (weight.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	const updatedWeight = await Weight.findByIdAndUpdate(
		req.params.id,
		{
			date: req.body.date,
			weight: req.body.weight,
		},
		{
			new: true,
		},
	);

	res.status(200).json(updatedWeight);
});

//  @desc   Delete Weights
//  @route  DELETE /api/weights/:id
//  @access Private
const deleteWeight = asyncHandler(async (req, res) => {
	const weight = await Weight.findById(req.params.id);

	if (!weight) {
		res.status(400);
		throw new Error("weight not found");
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	// Make sure the logged in user match the owner
	if (weight.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	await Weight.deleteOne(weight);

	res.status(200).json({ id: req.params.id });
});

module.exports = { getWeights, setWeight, updateWeight, deleteWeight };
