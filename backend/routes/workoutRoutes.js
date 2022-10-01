const express = require("express");

const router = express.Router();

const {
  getWorkouts,
  setWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getWorkouts).post(protect, setWorkout);
router.route("/:id").put(protect, updateWorkout).delete(protect, deleteWorkout);

module.exports = router;
