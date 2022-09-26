const asyncHandler = require('express-async-handler');
const Ride = require('../models/rideModel');

//  @desc   Get Rides
//  @route  GET /api/rides
//  @access Private
const getRides = asyncHandler(async (req, res) => {
  const rides = await Ride.find({ user: req.user.id });

  res.status(200).json(rides);
});

//  @desc   Set Ride
//  @route  POST /api/rides
//  @access Private
const setRide = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const ride = await Ride.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(ride);
});

//  @desc   Update Ride
//  @route  PUT /api/rides/:id
//  @access Private
const updateRide = asyncHandler(async (req, res) => {
  const ride = await Ride.findById(req.params.id);

  if (!ride) {
    res.status(400);
    throw new Error('Ride not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user match the owner
  if (ride.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedRide = await Ride.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedRide);
});

//  @desc   Delete Rides
//  @route  DELETE /api/rides/:id
//  @access Private
const deleteRide = asyncHandler(async (req, res) => {
  const ride = await Ride.findById(req.params.id);

  if (!ride) {
    res.status(400);
    throw new Error('ride not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user match the owner
  if (ride.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await Ride.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getRides, setRide, updateRide, deleteRide };
