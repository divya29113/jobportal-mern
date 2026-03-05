const Job = require("../models/Job");

// Create a new job
const createJob = async (req, res) => {
  try {
    const { title, company, location, description, salary } = req.body;
    const job = await Job.create({
      title,
      company,
      location,
      description,
      salary,
      postedBy: req.user._id,
    });
    res.status(201).json({ message: "Job posted successfully", job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createJob, getJobs };