const asyncHandler = require('express-async-handler');
const Run = require('../models/runModel');

//  @desc   Get Runs
//  @route  GET /api/runs
//  @access Private
const getRuns = asyncHandler(async (req, res) => {
  const runs = await Run.find({ user: req.user.id });

  res.status(200).json(runs);
});

//  @desc   Set Run
//  @route  POST /api/runs
//  @access Private
const setRun = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const run = await Run.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(run);
});

//  @desc   Update Run
//  @route  PUT /api/runs/:id
//  @access Private
const updateRun = asyncHandler(async (req, res) => {
  const run = await Run.findById(req.params.id);

  if (!run) {
    res.status(400);
    throw new Error('run not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user match the owner
  if (run.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedRun = await Run.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedRun);
});

//  @desc   Delete Runs
//  @route  DELETE /api/runs/:id
//  @access Private
const deleteRun = asyncHandler(async (req, res) => {
  const run = await Run.findById(req.params.id);

  if (!run) {
    res.status(400);
    throw new Error('run not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user match the owner
  if (run.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await Run.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getRuns, setRun, updateRun, deleteRun };
