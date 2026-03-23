import React, { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log("Error fetching jobs:", err);
      });
  }, []);

  const applyJob = async (jobId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `http://localhost:5000/api/applications/apply/${jobId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log("Apply error:", error);
      alert("Error applying for job");
    }
  };

  return (
    <div className="page-section">
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#1e3a8a"
          }}
        >
          Available Jobs
        </h2>

        {jobs.length === 0 ? (
          <p style={{ textAlign: "center" }}>No jobs available</p>
        ) : (
          jobs.map((job) => (
  <div className="job-card" key={job._id}>
    <h3 style={{ color: "#1e3a8a", marginBottom: "10px" }}>{job.title}</h3>

    <p style={{ margin: "6px 0" }}>
      <b>Company:</b> {job.company}
    </p>

    <p style={{ margin: "6px 0" }}>
      <b>Location:</b> {job.location}
    </p>

    <p style={{ margin: "6px 0" }}>
      <b>Salary:</b> {job.salary}
    </p>

    <p style={{ margin: "10px 0" }}>
      <b>Description:</b> {job.description}
    </p>

   <button
  onClick={() => applyJob(job._id)}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px"
  }}
>
  Apply Now
</button>
  </div>
))
        )}
      </div>
    </div>
  );
}

export default Jobs;