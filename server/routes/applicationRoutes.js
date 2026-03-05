const express = require("express");
const router = express.Router();

const { applyJob, getApplicationsForJob } = require("../controllers/applicationController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// Jobseeker apply job
router.post(
  "/apply/:jobId",
  protect,
  authorizeRoles("jobseeker"),
  applyJob
);

// Employer view applicants
router.get(
  "/job/:jobId",
  protect,
  authorizeRoles("employer"),
  getApplicationsForJob
);

module.exports = router;