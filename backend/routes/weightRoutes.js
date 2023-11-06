const express = require("express");

const router = express.Router();

const {
	getWeights,
	setWeight,
	updateWeight,
	deleteWeight,
} = require("../controllers/weightController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getWeights).post(protect, setWeight);
router.route("/:id").put(protect, updateWeight).delete(protect, deleteWeight);

module.exports = router;
