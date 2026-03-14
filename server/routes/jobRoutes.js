const express = require("express");
const router = express.Router();

const { protect, authorizeRoles } = require("../middleware/authMiddleware");

const {
  createJob,
  getJobs,
  getMyJobs
} = require("../controllers/jobController");

// Create job (only employer)
router.post("/", protect, authorizeRoles("employer"), createJob);

// Get all jobs (public)
router.get("/", getJobs);

// Get jobs posted by logged-in employer
router.get("/myjobs", protect, authorizeRoles("employer"), getMyJobs);

module.exports = router;