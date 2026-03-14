const Application = require("../models/Application");
const Job = require("../models/Job");

// Apply for a job
const applyJob = async (req, res) => {
  try {

    const jobId = req.params.jobId;

    const application = await Application.create({
      job: jobId,
      applicant: req.user._id,
      status: "applied"
    });

    res.status(201).json({
      message: "Job applied successfully",
      application
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get applicants for a job (Employer)
const getApplicationsForJob = async (req, res) => {
  try {

    const jobId = req.params.jobId;

    const applications = await Application.find({ job: jobId })
      .populate("applicant", "name email")
      .populate("job", "title company");

    res.status(200).json(applications);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update application status (Accept / Reject)
const updateApplicationStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      message: "Application status updated",
      application
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  applyJob,
  getApplicationsForJob,
  updateApplicationStatus
};