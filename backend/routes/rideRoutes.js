const express = require("express");

const router = express.Router();

const {
  getRides,
  setRide,
  updateRide,
  deleteRide,
} = require("../controllers/rideController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getRides).post(protect, setRide);
router.route("/:id").put(protect, updateRide).delete(protect, deleteRide);

module.exports = router;
