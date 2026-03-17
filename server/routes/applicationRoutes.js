const express = require("express");
const router = express.Router();

const { protect, authorizeRoles } = require("../middleware/authMiddleware");

const {
  applyJob,
  getApplicationsForJob,
  updateApplicationStatus,
  getMyApplications
} = require("../controllers/applicationController");

// Apply for job (job seeker)
router.post("/apply/:jobId", protect, authorizeRoles("jobseeker"), applyJob);

// Employer view applicants
router.get("/job/:jobId", protect, authorizeRoles("employer"), getApplicationsForJob);

// Employer update status (Accept / Reject)
router.put("/status/:id", protect, authorizeRoles("employer"), updateApplicationStatus);

// Jobseeker view own applications
router.get("/my", protect, authorizeRoles("jobseeker"), getMyApplications);

module.exports = router;