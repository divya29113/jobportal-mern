const express = require("express");
const router = express.Router();
const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const { createJob, getJobs } = require("../controllers/jobController");

// Create a job (only employer)
router.post("/", protect, authorizeRoles("employer"), createJob);

// Get all jobs (public)
router.get("/", getJobs);

module.exports = router;