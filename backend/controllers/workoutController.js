const asyncHandler = require('express-async-handler');
const Workout = require('../models/workoutModel');

//  @desc   Get Workouts
//  @route  GET /api/workouts
//  @access Private
const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({ user: req.user.id });

  res.status(200).json(workouts);
});

//  @desc   Set Workout
//  @route  POST /api/workouts
//  @access Private
const setWorkout = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const workout = await Workout.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(workout);
});

//  @desc   Update Workout
//  @route  PUT /api/workouts/:id
//  @access Private
const updateWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    res.status(400);
    throw new Error('workout not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user match the owner
  if (workout.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedWorkout = await Workout.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedWorkout);
});

//  @desc   Delete Workouts
//  @route  DELETE /api/workouts/:id
//  @access Private
const deleteWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    res.status(400);
    throw new Error('workout not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user match the owner
  if (workout.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await Workout.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getWorkouts, setWorkout, updateWorkout, deleteWorkout };
